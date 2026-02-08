import { getGraft } from "../utils/graft";

export async function sayHello(name: string): Promise<string> {
  const { DenzilPriceCalculator } = await getGraft();
  return DenzilPriceCalculator.SayHello(name);
}