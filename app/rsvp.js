import { db } from "~/utils/db.server";

export async function getRsvps() {
  const querySnapshot = await db.collection("rsvps").get();

  const data = []
  querySnapshot?.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return data;
}

export async function getRsvp(name) {
  const docSnapshot = await db.collection("rsvps").doc(String(name)).get();
  if (docSnapshot.exists) {
    const rsvp = docSnapshot.data()
    return rsvp
  }
}

export async function createRsvp(rsvp) {
  const { name, attendingRecovery, attendingWedding, dietaryRequirements } =
    rsvp;

  const docRef = db.collection("rsvps").doc(String(name));
  await docRef.set({
    name,
    attendingRecovery,
    attendingWedding,
    dietaryRequirements,
    createdAt: new Date(),
  });

  return getRsvp(rsvp.name)
}
