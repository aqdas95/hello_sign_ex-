defmodule Mix.Tasks.Install.Embedded do
  use Mix.Task

  @shortdoc "mix install.embedded"

  @impl Mix.Task

  def run(_) do
    System.cmd("mkdir", ["assets/vendor/hellosign"])
    System.cmd("touch", ["assets/vendor/hellosign/embedded.js"])

    System.cmd("curl", [
      "-L",
      "https://raw.githubusercontent.com/aqdas95/hellosign_ex/feature/hellosign-embedded-signing/priv/static/embedded.production.min.js",
      "-o",
      "assets/vendor/hellosign/embedded.js"
    ])
  end
end
