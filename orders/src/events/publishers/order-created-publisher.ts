import { Publisher, OrderCreatedEvent, Subjects } from '@czprojects/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
