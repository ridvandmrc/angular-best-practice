import { TemplateRef } from "@angular/core";

export type Cols<T extends string> = {
  key: T;
  label: string;
};

export type Rows<T extends string> = Record<
  T,
  { value?: string; render?: TemplateRef<HTMLElement> }
>;
