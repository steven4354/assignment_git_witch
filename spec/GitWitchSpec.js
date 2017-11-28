const GitWitch = require("../src/gitwitch");

describe("GitWitch", () => {
  beforeEach(() => {
    // this.parser = { parse() {} };
    // this.runner = { run() {} };
    // this.formatter = { format() {} };
    //
    // this.command = "command";
    // this.response = "response";
    // this.output = "output";

    // spyOn(this.parser, "parse").andReturn(this.command);
    // spyOn(this.runner, "run").andReturn(Promise.resolve(this.response));
    // spyOn(this.formatter, "format").andReturn(this.output);

    // this.witch = new GitWitch({
    //   parser: this.parser,
    //   runner: this.runner,
    //   formatter: this.formatter
    // });

    witch = new GitWitch();

    spyOn(witch, "process").toHaveBeenCalled();
  });

  it("processes a question and returns a formatted response", done => {
    const input = "what repos does brunhilde55 have?";
    const output =
      "brunhilde55's public repos repo1name - awesome project repo2name - awesomer project repo3name - awesomest project";
    expect(witch.process(input)).toEqual(output);
    /*
    this.witch.process(input).then(output => {
      expect(this.parser.parse).toHaveBeenCalledWith(input);
      expect(this.runner.run).toHaveBeenCalledWith(this.command);
      expect(this.formatter.format).toHaveBeenCalledWith(this.response);
      expect(output).toEqual(this.output);
      done();
    });
    */
  });
});
