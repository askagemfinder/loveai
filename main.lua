-- main.lua

love.graphics.clear(love.color.black)

-- Draw something on the screen
love.graphics.setColor(love.color.white)
love.graphics.print("Hello, Love2D!", 10, 10)

function love.draw()
  love.graphics.clear(love.color.black)
  love.graphics.setColor(love.color.white)
  love.graphics.print("Hello, Love2D!", 10, 10)
end

-- Add any other functions you need here
