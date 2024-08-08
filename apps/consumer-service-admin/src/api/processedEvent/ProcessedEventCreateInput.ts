import { InputJsonValue } from "../../types";

export type ProcessedEventCreateInput = {
  eventData?: InputJsonValue;
  eventType?: string | null;
  processedAt?: Date | null;
};
