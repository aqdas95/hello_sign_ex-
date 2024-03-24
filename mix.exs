defmodule Hellosign.MixProject do
  use Mix.Project

  def project do
    [
      app: :hellosign,
      version: "0.1.0",
      elixir: "~> 1.15",
      escription: description(),
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      package: package(),
      name: "hellosign_ex",
      source_url: source()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: {Hellosign, []},
      applications: [:httpoison, :jason, :logger],
      extra_applications: [:logger]
    ]
  end

  defp description do
    """
    community-maintained hellosign Wrapper written in Elixir.
    """
  end

  defp package do
    [
      licenses: ["MIT"],
      exclude_patterns: ["./config/*"],
      links: %{
        "GitHub" => source()
      },
      maintainers: [
        "aqdas95"
      ]
    ]
  end

  defp source, do: "https://github.com/aqdas95/hellosign_ex.git"

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:atomize_keys, "~> 1.2"},
      {:jason, "~> 1.4"},
      {:httpoison, "~> 2.0"},
      {:mock, "~> 0.3.6", only: [:test]},
      {:mix_test_watch, "~> 1.0", only: [:dev, :test], runtime: false},
      {:ex_doc, ">= 0.29.3", only: :dev}
    ]
  end
end
