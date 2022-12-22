import { json } from "@remix-run/node";
import styles from "~/styles/global.css";
import Modal from "~/components/Modal";
import { useState } from "react";
import { getRsvps, createRsvp } from "~/rsvp";

export const action = async ({ request }) => {
  await new Promise(res => setTimeout(res, 200));

  let formData = await request.formData();
  let name = formData.get("name");
  let attendingWedding = formData.get("attendingWedding");
  let attendingRecovery = formData.get("attendingRecovery");
  let dietaryRequirements = formData.get("dietaryRequirements");

  let errors = {};
  if (!name) errors.name = true;

  if (Object.keys(errors).length > 0) {
    return json({ errors: { name: true } });
  }

  try {
    await createRsvp({
      name,
      attendingRecovery,
      attendingWedding,
      dietaryRequirements,
    });
    return json({ ok: true });
  } catch (error) {
    return json({ error: error.message });
  }
};

export let loader = ({ request }) => {
  return getRsvps(request);
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Marcellus|Montserrat",
    },
    { rel: "stylesheet", href: styles },
  ];
}

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="header-image">
          <h1>
            Bridget
            <span>
              <em>and</em>
            </span>
            Todd
          </h1>
          <div className="header-rsvp">
            <button className="rsvp-button" onClick={() => setModalOpen(true)}>
              RSVP
            </button>
          </div>
        </div>
      </header>

      <main>
        <div id="schedule" className="wrapper section">
          <h1 className="mb1">Schedule</h1>
          <div className="schedule-item pb2">
            <h2 className="timeline-title">Ceremony</h2>
            <p className="schedule-item__time">4pm &middot; 4th March 2023</p>
            <p>The Amphitheatre @ The Calile Hotel</p>
            <p>Please arrive by 3.45pm</p>
            <p>Dress code: Cocktail</p>
          </div>
          <div className="schedule-item pt1 pb2">
            <h2 className="timeline-title">Cocktail hour</h2>
            <p className="schedule-item__time">
              4.45pm &middot; 4th March 2023
            </p>
            <p>The Terrace @ The Calile Hotel</p>
            <p>Enjoy a Spritz while we capture a few photos</p>
          </div>
          <div className="schedule-item pt1 pb2">
            <h2 className="timeline-title">Reception</h2>
            <p className="schedule-item__time">6pm &middot; 4th March 2023</p>
            <p>The Grand Rooms @ The Calile Hotel</p>
          </div>
          <div className="schedule-item pt1">
            <h2 className="timeline-title">Recovery</h2>
            <p className="schedule-item__time">1pm &middot; 5th March 2023</p>
            <p>Slipstream Brewery</p>
            <p>94 Wilkie Street, Yeerongpilly</p>
            <p className="pt1">
              Please join us for a recovery beverage the following day to
              celebrate Todd's birthday
            </p>
          </div>
        </div>

        <div id="accommodation" className="alternate-background">
          <div className="wrapper section">
            <h1 className="mb1">Accommodation</h1>
            <p>
              For family and friends who are travelling from out of town and
              wish to stay at the Calile Hotel (or would like a little
              staycation), we have kindly been given a 15% discount on
              accommodation for our guests.
            </p>
            <p className="mt1">
              <a
                target="_blank"
                href="https://reservations.thecalilehotel.com/?adult=1&arrive=2023-03-03&chain=14687&child=0&config=3218&configcode=3218&currency=AUD&depart=2023-03-05&hotel=1381&level=hotel&locale=en-US&promo=TH14140089&rooms=1&sbe_rc=ZjVjYTU2Y2ItMTMwMi00YzFjLTgxOGMtNmZiZThhNDIxZDE1LGU1ZTJjMDViLWJkNWUtNDM2Ni1iYWVhLTJkYzA2OGU1YmFkNQ..&theme=CALILE&themecode=CALILE"
              >
                You can use this link to book.
              </a>
            </p>
            <p className="mt1">
              Please note that the discount code may stop working if the hotel
              capacity becomes limited.
            </p>
          </div>
        </div>

        <div id="gifts" className="wrapper section">
          <h1 className="mb1">Gifts</h1>
          <p>
            As we are travelling overseas after the wedding, we kindly ask for
            no physical gifts. If you wish to help us celebrate with a gift,
            there will be a wishing well to contribute to on the day.
          </p>
        </div>

        <div id="rsvp" className="alternate-background">
          <div id="faq" className="wrapper section">
            <h1 className="mb2">Questions</h1>
            <div className="mb2">
              <p className="faq">
                <strong>What do I wear?</strong>
              </p>
              <p>
                The dress code is cocktail, and dance floor appropriate shoes
                are strongly encouraged.
              </p>
            </div>

            <div className="mb2">
              <p className="faq">
                <strong>When do I need to RSVP?</strong>
              </p>
              <p>We would appreciate your RSVP by 3rd February.</p>
            </div>

            <div className="mb2">
              <p className="faq">
                <strong>Are children welcome?</strong>
              </p>
              <p>
                Our wedding is an over 18 event. However, our recovery is not
                and we would love for you to bring them along on Sunday!
              </p>
            </div>

            <div>
              <p className="faq">
                <strong>Is there parking available?</strong>
              </p>
              <p>
                There is secure parking available at The Calile. We recommend{" "}
                <a
                  target="_blank"
                  href="https://www.secureparking.com.au/en-au/car-parks/australia/queensland/brisbane/fortitude-valley/the-calile-hotel-car-park"
                >
                  pre-booking
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="wrapper section mt2 mb2">
          <div>
            <button className="rsvp-button" onClick={() => setModalOpen(true)}>
              RSVP
            </button>
          </div>
        </div>

        {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
      </main>
    </div>
  );
}
