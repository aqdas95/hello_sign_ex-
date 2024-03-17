defmodule HelloSignExTest do
  use ExUnit.Case
  doctest HelloSignEx

  test "greets the world" do
    assert HelloSignEx.hello() == :world
  end
end
