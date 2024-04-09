defmodule Mix.Tasks.Install.Embedded do
  use Mix.Task

  @shortdoc "mix install.embedded"

  @impl Mix.Task

  def run(args) do
    project_path =
      with ["--umbrella", name] <- args do
        "apps/#{name}/"
      else
        _ -> ""
      end

    System.cmd("mkdir", ["#{project_path}assets"])
    System.cmd("mkdir", ["#{project_path}assets/vendor"])
    System.cmd("mkdir", ["#{project_path}assets/vendor/hellosign"])
    System.cmd("touch", ["#{project_path}assets/vendor/hellosign/embedded.js"])

    System.cmd("curl", [
      "-L",
      "https://cdn.jsdelivr.net/npm/hellosign-embedded@2.12.0/umd/embedded.production.min.js",
      "-o",
      "#{project_path}assets/vendor/hellosign/embedded.js"
    ])
  end
end
