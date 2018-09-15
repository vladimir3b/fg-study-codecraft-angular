import { InjectionToken } from "@angular/core";
import { Review4ParentService } from "../review4/services/review4-parent.service";

export const REVIEW4_PARENT_SERVICE_TOKEN: InjectionToken<Review4ParentService> =
  new InjectionToken<Review4ParentService>('this is the review 4 parent service');