import { openDB } from "idb";

const DB_NAME = "moodLoggerDB";
const STORE_NAME = "moods";

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
}

export async function saveMood(entry) {
  const db = await getDB();
  await db.add(STORE_NAME, entry);
}

export async function loadMoods() {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
}

export async function deleteMood(id) {
    const db = await getDB();
    await db.delete(STORE_NAME, id);
  }