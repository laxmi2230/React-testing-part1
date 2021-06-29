import { multiply, makeLowerCase } from './HelperFunction';

test("multiply", () => {
    expect(multiply(2, 10)).toBe(20);
})

test("LowerCase", () => {
    expect(makeLowerCase("LAXMi")).toBe("laxmi");
    expect(makeLowerCase("MOlu")).toBe("molu");
})


