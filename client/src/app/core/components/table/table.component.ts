import { Component, Input } from "@angular/core";
import { Cols, Rows } from "../../models";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  @Input() title: string | null = "";
  @Input() showHeader: boolean = true;
  @Input() rows: Rows<string>[] = [];
  @Input() cols: Cols<string>[] = [];

  getValue(index: number, key: Cols<string>) {
    if (!!this.rows[index][key.key].render) return "";

    return this.rows[index][key.key].value || "";
  }

  getComponent(index: number, key: Cols<string>) {
    return this.rows[index][key.key].render || null;
  }
}
