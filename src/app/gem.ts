export class GemCollection {
  constructor(
    public id: number,
    public type: "normal" | "extra" | "epic",
    public name: string,
    public power: number
  ) {}
}
