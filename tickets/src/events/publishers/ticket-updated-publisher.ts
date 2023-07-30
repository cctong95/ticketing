import { Publisher, Subjects, TicketUpdatedEvent } from '@czprojects/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
