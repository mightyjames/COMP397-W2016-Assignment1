// INTRO SCENE
module scenes {
    export class FightHalf extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _fightAllLeftImage: createjs.Bitmap;       
        private _finishAll: objects.Button;       
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._fightAllLeftImage = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._fightAllLeftImage);
            
            this._finishAll = new objects.Button("RightButton", config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._bossFightClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _bossFightClick(event: createjs.MouseEvent){
          scene = config.Scene.BOSS_FIGHT_LEFT1;
          changeScene();
        }
    }
}