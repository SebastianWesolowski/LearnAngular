import { Component } from "@angular/core";
import { TmplAstRecursiveVisitor } from "@angular/compiler";

import { GemCollection } from "./gem";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "test";
  playlist = {
    id: 1,
    name: "test",
    track: 12,
    collor: "#ff00ff",
    favorite: true
  };

  playlistArr = [
    {
      id: 1,
      name: "test",
      track: 12,
      collor: "#ff00ff",
      favorite: true
    },
    {
      id: 2,
      name: "test",
      track: 12,
      collor: "#ff00ff",
      favorite: true
    }
  ];

  gemList = [
    new GemCollection(1, "normal", "basic cristal", 20),
    new GemCollection(2, "normal", "cristal", 21),
    new GemCollection(3, "extra", "extra cristal", 28),
    new GemCollection(4, "epic", "epic cristal", 50)
  ];

  onSave(event) {
    console.log("save", event);
  }
}
