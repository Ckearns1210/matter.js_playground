

$(function () {
  console.log('loaded');
  // Matter.js - http://brm.io/matter-js/

  // Matter module aliases
  // Matter module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint;

  var canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

// create a Matter.js engine
var engine = Engine.create(document.body, {
  render: {
    canvas: canvas,
    options: {
      showAngleIndicator: true,
      wireframes: false
    }
  }
});

  window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

// add a mouse controlled constraint
var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint);




var stack = Composites.stack(170, 100, 5, 1, 20, 0, function(x, y, column, row) {
   return Bodies.circle(x, y, 60, {
     restitution: 0.9,
      render: {
        sprite: {
          texture: './images/S.png',
          texture: './images/Helvetica.png'
        }
      }
    });
});

var groundWidth = window.innerWidth * 3;
console.log(groundWidth);
// create the ground the stack will sit on
var ground = Bodies.rectangle(1000, 400, groundWidth, 1, {
  isStatic: true,
  render: {
    lineWidth: 0
  }
});

// create the wrecking ball
var ball = Bodies.circle(100, 400, 50, { density: .01, frictionAir: 0.001
});

// create the rope the ball will swing on
var ballRope = Constraint.create({
  pointA: { x: 10, y: 100 },
  bodyB: ball
});

// add all of the bodies to the world
World.add(engine.world, [ball, ballRope, stack, ground]);


// run the engine
Engine.run(engine);

});
