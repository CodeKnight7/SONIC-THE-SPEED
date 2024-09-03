import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text(
      `
        NATIONAL PUBLIC SCHOOL BANASHANKARI
        INFOFEST 2024
        SONIC THE SPEED
        DEVELOPED - JAIGANESH
      `,
      { font: "mania", size: 32 }
    ),
  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania",
      size: 70,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}