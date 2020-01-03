import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=7HqjfuRB2eceFUmhAP7nRVNiH4S2&pid=";

  constructor(private http: HttpClient) {}

  playerInfo;

  searchPlayer(pid) {
    this.http.get<any>(`${this.playerUrl}${pid}`).subscribe(user => {
      this.playerInfo = user;
    });
  }

  ngOnInit() {}
}
