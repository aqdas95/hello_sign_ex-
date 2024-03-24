defmodule HellosignTest do
  use ExUnit.Case
  doctest Hellosign

  test "greets the world" do
    assert Hellosign.hello() == :world
  end
end
