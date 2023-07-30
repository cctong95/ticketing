import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@czprojects/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
