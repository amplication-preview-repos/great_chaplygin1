import { JsonValue } from "type-fest";

export type ProcessedEvent = {
  createdAt: Date;
  eventData: JsonValue;
  eventType: string | null;
  id: string;
  processedAt: Date | null;
  updatedAt: Date;
};