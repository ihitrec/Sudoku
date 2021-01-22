# Sudoku
The aim of this project is to create a grid based number puzzle called Sudoku. It will have a simple, one page design and different features that make the game more enjoyable.
  
This is the second project in Code Institute Full Stack Developer program based on HTML, CSS, JavaScript and optional frameworks.

## UX

### User Stories

- I am a first-time player and am interested in finding out how the game is played.
- I am a casual player and I want to play a fun Sudoku game with a nice design and simplicity of use.
- I am an expert player and want more difficult puzzles to challenge myself and improve logic skills.
- I want different features that will make it easier to play the game like the undo button for when I make a mistake.
- I want the game experience to be as good on mobile as it is on desktop so I can play on the go.

### Planes of UX

#### Strategy

There does not seem to be a lot of research available on what a typical Sudoku player is like and if the preferred way of playing is desktop or mobile. Inspiration on design and features to include will be taken from other online Sudoku games. Simple features will be implemented with possible addition of more complex features depending on feasibility. The main goals are to create a fully responsive website/game that covers most or all of the needs expressed in the user stories. The game should be challenging, easy to use and fun to play.  

![Importance/viability chart](assets/images/README_images/chart.jpg)

> I have generated a chart based on the importance and feasibility of the main goals. This is just an estimate and it might prove that some features are harder to implement than expected. Most goals are high on the chart apart from generating a new sudoku grid each game. That will have the lowest priority.

#### Scope

1. The game should be playable and offers the same experience across different devices. This means that a number keyboard is on screen to enable mobile inputs.
2. The minimum playable version includes a premade grid, a win/lose scenario when the grid is filled and a new game button.
3. Game instructions are included.
4. Grid difficulty options for premade grids are available.
5. Undo button is available.
6. A hint button is available.
7. A generator should generate a new grid each game.

> This list should be done in order as the tasks were defined in the strategy plane. When it comes to grid generator, it is not something that necessary improves the game since the difficulty is not generated. From the users perspective it is not as important, but as it is the hardest thing to do and it is a good JavaScript challenge, it might still be included.

#### Structure
The website is a simple, single-page game and no advanced structure is necessary. Main focus will be the Sudoku grid which will be surrounded by other features. The number keyboard should be on the bottom while on mobile since it is easy to reach. The only feature that will lead from the main page will be the instructions. They will be implemented via modal which has an easy navigation.

#### Skeleton
[Mobile wireframe](assets/images/README_images/mobile-wireframe.png)  
[Desktop wireframe](assets/images/README_images/desktop-wireframe.png)


> The wireframes are not to complex and just show the general layout which will more than likely be improved upon.


#### Surface
Since the game of Sudoku is analytical, a more serious, non-script font type will be used. 

