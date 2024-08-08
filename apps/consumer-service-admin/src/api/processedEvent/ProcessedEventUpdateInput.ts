import { InputJsonValue } from "../../types";

export type ProcessedEventUpdateInput = {
  eventData?: InputJsonValue;
  eventType?: string | null;
  processedAt?: Date | null;
};
