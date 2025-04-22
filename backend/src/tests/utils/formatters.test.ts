import { formatPdbId } from "../../utils/formatters";

describe("Formatter Utilities", () => {
  it("should format PDB IDs correctly", () => {
    expect(formatPdbId("1abc")).toBe("1ABC");
    expect(formatPdbId("  2def  ")).toBe("2DEF");
    expect(formatPdbId("3ghiEXTRA")).toBe("3GHI");
    expect(formatPdbId("")).toBe("");
  });
});
