type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type IsDraw<A extends RockPaperScissors, B extends RockPaperScissors> = A extends B ? true : never;

type IsWinner<A extends RockPaperScissors, B extends RockPaperScissors> =
  | (A extends "👊🏻" ? (B extends "🖐🏾" ? true : never) : never)
  | (A extends "🖐🏾" ? (B extends "✌🏽" ? true : never) : never)
  | (A extends "✌🏽" ? (B extends "👊🏻" ? true : never) : never);

type WhoWins<A extends RockPaperScissors, B extends RockPaperScissors> = true extends IsDraw<A, B>
  ? "draw"
  : true extends IsWinner<A, B>
  ? "win"
  : "lose";
