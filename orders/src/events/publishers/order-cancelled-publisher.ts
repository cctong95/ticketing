import { Publisher, OrderCancelledEvent, Subjects } from '@czprojects/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
