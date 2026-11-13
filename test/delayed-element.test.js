import { expect, test } from "vitest";
import { page } from "vitest/browser";

test("expect.element waits for an element that appears later", async () => {
  setTimeout(() => {
    const button = document.createElement("button");
    button.textContent = "Hello";
    document.body.append(button);
  }, 200);

  await expect
    .element(page.getByRole("button", { name: "Hello" }))
    .toBeInTheDocument();
});
