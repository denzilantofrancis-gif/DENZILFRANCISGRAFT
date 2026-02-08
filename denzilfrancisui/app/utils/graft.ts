let graftModule: any = null;

export async function getGraft() {
  if (!graftModule) {
    graftModule = await import("@graft/nuget-DenzilCalculator");
    graftModule.GraftConfig.host = "ws://localhost/ws";
  }

  return graftModule;
}
