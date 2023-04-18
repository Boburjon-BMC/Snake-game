document.addEventListener("DOMContentLoaded", function(){
    'use strict';
    const user_name_input = document.querySelector('.input_userx1');
    const user_name_enter_btn = document.querySelector('.user_name_btn');
    const icon_user_name = document.querySelector('.icon_user_name')
    const play_btn = document.querySelectorAll('.animation_x1_play');
    const snake_btn = document.querySelectorAll('.animation_x1_snake');
    const record_btn = document.querySelectorAll('.animation_x1_record');
    const setting_btn = document.querySelectorAll('.animation_x1_setting');
    const play_card = document.querySelector('.play');
    const snake_card = document.querySelector('.snake_bar');
    const record = document.querySelector('.record');
    const setting = document.querySelector('.setting');
    const exit = document.querySelectorAll('.exit');
    const acount_card_btn_img = document.querySelector('.img_acount_js');
    const acount_card_content = document.querySelector('.acount_card_content');
    const acount_card = document.querySelector('.acount_card');
    const expand = document.querySelector('.fa-expand');
    const log_out = document.querySelector('.log_out');
    const log_acount_out_ok = document.querySelector('.log_acount_out_ok');
    const elem = document.documentElement;
    const snake_user_name_label = document.querySelector('.snake_user_name_label')
    const user_name_input_taxrirlash = document.querySelector('.user_name_input_taxrirlash');
    const new_acont_save  = document.querySelector('.new_acont_save');


    let user_name;
    let user_name_input_taxrirlashx1;
    let fullScreen = false;
    let time_interval;




    const color = [
        " #CC0000",
        " #FF9933",
        " #FFFF33",
        " #00FF00",
        " #33FF99",
        " #00FFFF",
        " #3333FF",
        " #FF33FF",
        " #FF3399",
        " #FFFFFF",
        "#0000CC",
        "#4C0099",
   ]

    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
      }
  
  /* Close fullscreen */
     function closeFullscreen() {
       if (document.exitFullscreen) {
            document.exitFullscreen();
       } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
       } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
       }
     }
    expand.addEventListener("click", function(e){
    if (fullScreen){
        fullScreen = false;
        closeFullscreen();
    } else {
        fullScreen = true;
        openFullscreen();
    }
    })

    // exit
    exit.forEach(element => {
        element.addEventListener('click', ()=>{
            play_card.style.display = 'none';
            snake_card.style.display = 'none';
            record.style.display = 'none';
            setting.style.display = 'none';
        })
    });

    function show(e){
        e.style.display = 'flex';
    }
    function hide(e){
        e.style.display = 'none';
    }

    // setInterlav_user_name

    function setInterlav_user_name() {
        setInterval(() => {
            icon_user_name.innerHTML= ' '
            user_name_input.style.border = '1px solid  transparent';
            user_name_input.style.boxShadow = 'inset 5px 5px 5px #0b0909, inset -5px -5px 5px #252c4b';
        }, 4000);
    }

    // uesr_name_enter  
    const snake_user_name_label_lavel = document.querySelector('.snake_user_name_label_lavel');

    function uesr_name_enter() {
        if(user_name_input.value == 0 ){
            if(icon_user_name.innerHTML == ' '){
                icon_user_name.insertAdjacentHTML('afterbegin',`<i class="icon_check_name_false fas fa-triangle-exclamation"></i>`);
                user_name_input.style.boxShadow = '0  0 10px red, 0  0 15px red';
                setInterlav_user_name();          
            }
        }
        else if(!user_name_input.value == 0 ){
            // icon_user_name.innerHTML = ' ';
            icon_user_name.insertAdjacentHTML('afterbegin',`<i class="icon_check_name_true fa-solid fa-check"></i>`)
            user_name_input.style.border = '1px solid lime';
            user_name_input.style.boxShadow = '0  0 10px lime, 0  0 15px lime';
            user_name = user_name_input.value;
            user_name_input_taxrirlashx1 = user_name_input_taxrirlash.value;
            setInterlav_user_name();        
            snake_user_name_label.innerHTML = ' ';
            snake_user_name_label_lavel.innerHTML = ' ';
            localStorage.setItem(`user_name`, user_name);
            snake_user_name_label_lavel.textContent = localStorage.getItem('user_name')
            snake_user_name_label.textContent = localStorage.getItem("user_name"); 
            user_name_input_taxrirlash.value = localStorage.getItem('user_name');
            user_name_input.value = '';
        }
    }
    snake_user_name_label_lavel.textContent = localStorage.getItem('user_name')
    snake_user_name_label.textContent = localStorage.getItem("user_name");
    user_name_input_taxrirlash.value = localStorage.getItem('user_name');
    user_name_enter_btn.addEventListener('click', uesr_name_enter);


    new_acont_save.addEventListener('click', ()=>{
        user_name_input_taxrirlashx1 = user_name_input_taxrirlash.value;
        localStorage.setItem('user_name', user_name_input_taxrirlashx1);
        snake_user_name_label.textContent = localStorage.getItem("user_name"); 
        user_name_input_taxrirlashx1 = localStorage.getItem('user_name');
    });

    // pllay_btn
        function play_btn_function(){ 
        if(localStorage.length == "0") {
            if(icon_user_name.innerHTML != ' '){
                user_name_input.style.boxShadow = '0  0 10px red, 0  0 15px red';
                setInterlav_user_name();    
            }
            else{
                icon_user_name.insertAdjacentHTML('afterbegin',`<i class="icon_check_name_false fas fa-triangle-exclamation"></i>`);
                user_name_input.style.boxShadow = '0  0 10px red, 0  0 15px red';
                setInterlav_user_name();
            }
        }
        else if(localStorage.length >= "1"){
            show(play_card);
        }
    }

    play_btn.forEach(element =>{
        element.addEventListener('click', play_btn_function);
    })

    // snake_btn
    function snake_card_click(){
        show(snake_card);
    }
    snake_btn.forEach(element =>{
        element.addEventListener('click', snake_card_click);
    })

    // record_btn
    function record_btn_click(){
        show(record);
    }
    record_btn.forEach(element =>{
        element.addEventListener('click', record_btn_click);
    })

    // setting_btn
    function setting_btn_click(){   
        show(setting);
    }
    setting_btn.forEach(element =>{
        element.addEventListener('click', setting_btn_click);
    })

    // acount_card
    acount_card_btn_img.addEventListener('click', ()=>{
        acount_card.classList.add('show');
        acount_card_content.classList.add('show');
        acount_card.style.animation = 'acount_card 1s 1 forwards';
    }); 
    acount_card.addEventListener('click', ()=>{
        acount_card.classList.remove('show');
        acount_card_content.classList.remove('show');
        card_acount_qu.classList.remove('show1')

    });

    // log_out
    const card_acount_qu = document.querySelector('.card_acount_qu');
    log_out.addEventListener('click', ()=>{
        card_acount_qu.classList.add('show1')
    }); 


    // tab snake and setting
    const tab_content = document.querySelectorAll('.tab_content');
    const tab_item = document.querySelectorAll('.tab_item');
    const tabContentItem = document.querySelectorAll('.S_B_S_P');
    function hidetabsContent(){
        tab_content.forEach((element) =>{
            element.style.display = 'none';
        });
        tab_item.forEach((element) =>{
            element.classList.remove('active');
        })
    }
    function showTabContent(i = 0){
        tab_content[i].style.display = "block";
        tab_item[i].classList.add('active');
    }   
    hidetabsContent();
    showTabContent(0);

    tabContentItem.forEach(element =>{
        element.addEventListener("click", (element)=>{
            const target = element.target;
            if(target && target.classList.contains('tab_item')){
                tab_item.forEach((item, index)=>{
                    if(target == item){
                        hidetabsContent();
                        showTabContent(index);
            }
          });
        }
        })
    })

    // log_out
    log_acount_out_ok.addEventListener('click', ()=>{
        localStorage.clear();
        snake_user_name_label.innerHTML = '';
        user_name_input_taxrirlash.value = '';
        clearInterval(setIntervalId);
        location.reload();
    });
    
    function playAudio(x) {
        x.play();
      }
      
      function pauseAudio(x) {
        x.pause();
      } 
    // setting
    const body_audio = document.querySelector('.body_audio');    
    const audio_true = document.querySelector('.audio_true');
    const audio_false = document.querySelector('.audio_false');
    audio_true.addEventListener('click', ()=>{
        audio_true.style.display = 'none';
        audio_false.style.display = 'block';
        pauseAudio(body_audio);
    });
    audio_false.addEventListener('click', ()=>{
        audio_true.style.display = 'block';
        audio_false.style.display = 'none';
        playAudio(body_audio);
    });

    const btn_save_mp3_body = document.querySelector('.btn_save_mp3_body');
    const setting_mp3_audio = document.querySelectorAll('.setting_mp3_audio');
    const setting_mp3_audioli = document.querySelectorAll('.SNAKE_BODY_MP3');
    const audio_snake = document.querySelectorAll('.audio_snake');
    
    let body_mp3;
    let saqla_mp3;

    function showmp3Content(i = 0){
        setting_mp3_audioli[i].classList.add('active');
        saqla_mp3  = audio_snake[i].attributes.src.nodeValue
    }   

    function hideMP3Content(){
        setting_mp3_audioli.forEach((element) =>{
            element.classList.remove('active');
        })
    }

    btn_save_mp3_body.addEventListener('click',()=>{
        body_audio.attributes.src.nodeValue = ' ';
        localStorage.setItem('saqla_mp3', saqla_mp3);
        body_audio.attributes.src.nodeValue = localStorage.getItem('saqla_mp3');
    });
    body_audio.attributes.src.nodeValue = localStorage.getItem('saqla_mp3');


    showmp3Content();
    hideMP3Content();
    setting_mp3_audioli.forEach((element , index)=>{
        element.addEventListener('click', (e)=>{
            body_mp3 = element.id;
        });
    });

    const mp3 = (e) =>{
        const target = e.target;
        if(target && target.classList.contains('SNAKE_BODY_MP3')){
            setting_mp3_audioli.forEach((item, index)=>{
                if(target == item){
                    hideMP3Content();
                    showmp3Content(index);
        }
      });
    }
    }
    setting_mp3_audio.forEach(e=>{
        e.addEventListener('click', mp3)
    });

    // pllay
    const lavel_1_window = document.querySelector('.lavel_1_window');
    const lavel_1 = document.querySelector('.lavel_1');
   

    lavel_1_window.addEventListener('click', lavel_1_windowFunction);        
    const playBar = document.querySelector('.play_bar');
    const scoreElement = document.querySelector('.food_number');
    const  Highfood_number2 = document.querySelector('.food_number2');
    const food_second = document.querySelector('.food_second');
    const food_mp3_audio = document.querySelector('.food_mp3_audio'); 
    const snake_game_over = document.querySelector('.snake_game_over');
        let foodX, foodY;
        let snakeX = 5, snakeY = 5;
        let velocityX = 0, velocityY = 0;
        let snakeBody = [];
        let gmaeOver = false;
        let setIntervalId;
        let score = 0;
        let second = 0;

        let highScore = localStorage.getItem('high-score') || 0;
        Highfood_number2.innerHTML = `${highScore}`;
        const lave_1_record = document.querySelector('.lave_1_record');
        
        lave_1_record.innerHTML = highScore;
    
        const record_name = document.querySelector('.record_name');
        const food = document.querySelector('.food'); 
        const time = document.querySelector('.time');
        record_name.innerHTML = localStorage.getItem('user_name');
        food.innerHTML = highScore;
        time.innerHTML = `${localStorage.getItem('time')}` +" "+ 's';

        const ChangeFoodPostion = (e) =>{
                foodX = Math.floor(Math.random() * 30 + 1)
                foodY = Math.floor(Math.random() * 60 + 1)
        };
        const handleGameOver =() =>{
                gameover();
        };
        function secont_function(){
            food_second.innerHTML = '0 s';
            time_interval = setInterval(() => {
                second = second + 1;
                food_second.innerHTML = `${second}` + `s`;
                localStorage.setItem('time', second);
            }, 1000);
        }
        const initGame = () =>{
            if(gmaeOver) return handleGameOver();

                let   htmlMarkub;        
                
                if(snake_food_figura1[0].classList.contains('active') == true){
                    food_color.forEach((e, index) => {
                        if(e.classList.contains('active')){
                            htmlMarkub= `<div class="food" style="grid-area: ${foodX} / ${foodY}; background:${color[index]}"></div>`;
                        }
                    })
                
                }
                else if(snake_food_figura1[1].classList.contains('active') == true){
                    food_color.forEach((e, index) => {
                        if(e.classList.contains('active')){
                            htmlMarkub= `<div class="food_circle" style="grid-area: ${foodX} / ${foodY}; background:${color[index]}"></div>`;
                        }
                    })
                }
                else if(snake_food_figura1[2].classList.contains('active') == true){
                    food_color.forEach((e, index) => {
                        if(e.classList.contains('active')){
                            htmlMarkub= `<div class="food_rec" style="grid-area: ${foodX} / ${foodY} ; background:${color[index]}"></div>`;
                        }
                    })
                }
                else if(snake_food_figura1[3].classList.contains('active') == true){
                    food_color.forEach((e, index) => {
                        if(e.classList.contains('active')){
                            htmlMarkub= `<div class="" style="grid-area: ${foodX} / ${foodY}"><i class="fa-solid fa-apple-whole fa-beat" style="color: ${color[index]}; font-size:30px;"></i></div>`;
                        }
                    })
                }
                else if(snake_food_figura1[4].classList.contains('active') == true){
                    food_color.forEach((e, index) => {
                        if(e.classList.contains('active')){
                            htmlMarkub= `<div class="" style="grid-area: ${foodX} / ${foodY}; "><i class="fa-solid fa-egg fa-shake" style="color:${color[index]}; font-size:30px;"></i></div>`;
                        }
                    })
                }



                if(snakeX === foodX && snakeY === foodY){
                        ChangeFoodPostion();
                        snakeBody.push([foodX, foodY]);
                        score++;
                        playAudio(food_mp3_audio)
                        highScore = score >= highScore ? score: highScore;
                        localStorage.setItem('high-score', highScore);
                        scoreElement.innerHTML = `${score}`;
                        Highfood_number2.innerHTML = `${highScore}`;
                }
    

                  for (let i = snakeBody.length - 1  ; i > 0; i--) {
                        snakeBody[i] = snakeBody[i - 1];

                  }

                snakeBody[0] = [snakeX, snakeY];
                

                  
                snakeX += velocityX;
                snakeY += velocityY;

                if(snakeX<= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 60){
                        gmaeOver = true;
                        playAudio(snake_game_over)
                }


                for (let i = 0; i < snakeBody.length; i++) {
                    if(snake_figura[0].classList.contains('active') == true){
                        color_active.forEach((e, index) => {
                            if(e.classList.contains('active')){
                                    htmlMarkub += `<div class="snake" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}; background:${color[index]}"></div>`;
                            }
                        })
                    }
                    else if(snake_figura[1].classList.contains('active') == true){
                        color_active.forEach((e, index) => {
                            if(e.classList.contains('active')){
                                    htmlMarkub += `<div class="snake snakeCricle" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}; background:${color[index]}"></div>`;
                            }
                        })
                    }
                     else if(snake_figura[2].classList.contains('active') == true){
                        color_active.forEach((e, index) => {
                            if(e.classList.contains('active')){
                                    htmlMarkub += `<div class="snake snakeRec" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}; background:${color[index]}"></div>`;
                            }
                        })
                    }
                    
                    if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0] ){
                            gmaeOver = true ;
                            playAudio(snake_game_over)
                    }
                }
                playBar.innerHTML = htmlMarkub;
        };


        // boshqaruv panele
        const functionPlay = (e) =>{
                if(e.key === 'ArrowUp' && velocityX != 1){
                        velocityX = -1;
                        velocityY = 0;
                }
                else if(e.key === 'ArrowDown' && velocityX != -1){
                        velocityX = 1;
                        velocityY = 0;
                }
                else if(e.key === 'ArrowLeft' && velocityY != 1){
                        velocityX = 0;
                        velocityY = -1 ;
                }
                else if(e.key === 'ArrowRight'  && velocityY != -1){
                        velocityX = 0;
                        velocityY = 1;
                }
        };

        ChangeFoodPostion();
        document.addEventListener('keydown', functionPlay);

        let speed =  200;
        const speed_input = document.querySelector('.speed_input');
        const btn_speedall = document.querySelectorAll('.btn_speed');
        const animation_speed = document.querySelector('.animation_speed');
    
        function hidetabsContent_snake_speed(){
            btn_speedall.forEach(element=>{
                element.classList.remove('active')
            });
        }
        function showTabContent_snake_speed(i = 0){
            btn_speedall[i].classList.add('active');
        }   
    
    
        speed_input.addEventListener('click', (element)=> {
            const target =  element.target;
            if(target && target.classList.contains('btn_speed')){
                btn_speedall.forEach((element, index) =>{
                    if(target == element){
                        hidetabsContent_snake_speed();
                        showTabContent_snake_speed(index);
                        if(index == 0){
                            localStorage.setItem('speed', "slow")
                        }
                        else if(index == 1){
                            localStorage.setItem('speed', "medium")
                        }
                        else if(index == 2){
                            localStorage.setItem('speed', "fast")
                        }
                    }
                });
            }
        });
        // menyu_bar
        const menyu_bar = document.querySelector('.menyu_bar');
        menyu_bar.addEventListener('click', ()=>{
            clearInterval(setIntervalId);
            location.reload();
        });

        // game_over
        const game_over = document.querySelector('.game_over')
        const gameover = () =>{
            game_over.classList.remove('hide');
        };


        // btn_house_buutonFunction
        const btn_house_buuton = document.querySelector('.btn_house_buuton');
        function btn_house_buutonFunction(){
            clearInterval(setIntervalId);
            location.reload();
        }
        btn_house_buuton.addEventListener('click', btn_house_buutonFunction);
       
        // btn_refresh_buutonFunction
        const btn_refresh_buuton = document.querySelector('.btn_refresh_buuton');
        function btn_refresh_buutonFunction(){
            
            snakeX = 5, snakeY = 5;
            velocityX = 0, velocityY = 0;
            snakeBody = [];
            gmaeOver = false;
            score = 0;
            second = 0;
            clearInterval(time_interval);
            lavel_1.classList.add('hide');
            game_over.classList.add('hide');
            lave_1_record.innerHTML = highScore;
            food.innerHTML = highScore;
            time.innerHTML = `${localStorage.getItem('time')}` +" "+ 's';
    

        };
        btn_refresh_buuton.addEventListener('click', btn_refresh_buutonFunction);

        // lavel_2
        const blok_window = document.querySelector('.blok_window');
        const btn_lavel_2 = document.querySelector('.btn_lavel_2');

        if(highScore >=45){
            blok_window.style.display = 'none';
            btn_lavel_2.classList.add('active');
            btn_lavel_2.addEventListener('click', btn_lavel_2_functions);
        }
        function btn_lavel_2_functions(){
            alert('ok')
        };



    // mediya
    function lavel_1_windowFunction(){
        lavel_1.classList.remove('hide');
        secont_function()
        let snake_bar_table_columun = 60;
        let snake_bar_table_row  = 30;                    
        playBar.style.width = '85%';
        playBar.style.height = '90%';
        playBar.style.gridTemplate = `repeat(${snake_bar_table_row}, 1fr) / repeat(${snake_bar_table_columun}, 1fr)`;

        if(btn_speedall[0].classList.contains('active') == true && localStorage.getItem('speed', 'slow')){
            setIntervalId =  setInterval(initGame, 290);                
            animation_speed.style.animation = 'snake_speed 8s linear infinite;';
            localStorage.setItem("speed", 'slow');
        }
        else  if(btn_speedall[1].classList.contains('active') == true  && localStorage.getItem('speed', 'medium')){
            setIntervalId =  setInterval(initGame, 200);    
            animation_speed.style.animation = 'snake_speed 5s linear infinite;'
            localStorage.setItem("speed", 'medium');
            
        }
         else if(btn_speedall[2].classList.contains('active') == true && localStorage.getItem('speed', 'fast')){
            setIntervalId =  setInterval(initGame, 120);    
            animation_speed.style.animation = 'snake_speed 2s linear infinite;'
            localStorage.setItem("speed", 'medium');
            
        }
    }
    // snake fegura
    const snake_btn_figura = document.querySelector('.snake_btn_figura');
    const snake_bar_figure = document.querySelector('.snake_bar_figure');
    const snake_figura = document.querySelectorAll('.snake_figura');
    const active_figura0 = document.querySelector('.active_figura11')
    const active_figura1 = document.querySelector('.active_figura12')
    const active_figura2 = document.querySelector('.active_figura13')
    const snake = document.querySelectorAll('.snake');
    const food1 = document.querySelector('.food');
    const color_active = document.querySelectorAll('.color_active');
    
    function hidetabsContent_snake(){
        snake_figura.forEach((element) =>{
            element.classList.remove('active');
        });
    }
    function showTabContent_snake(i = 0){
        snake_figura[i].classList.add('active');
    }   
    snake_bar_figure.addEventListener('click', (element)=>{
        const target = element.target;
        if(target && target.classList.contains('snake_figura')){
            snake_figura.forEach((item, index)=>{
                if(target == item){
                    hidetabsContent_snake();
                    showTabContent_snake(index);
        }
      });
    }
    });
    snake_btn_figura.addEventListener('click', ()=>{
        if(snake_figura[0].classList.contains('active') == true){
            active_figura0.classList.add('active');;
            active_figura1.classList.remove('active');
            active_figura2.classList.remove('active');
        }
        else if(snake_figura[1].classList.contains('active') == true){
            active_figura0.classList.remove('active');;
            active_figura1.classList.add('active');
            active_figura2.classList.remove('active');
        }
         else if(snake_figura[2].classList.contains('active') == true){
            active_figura0.classList.remove('active');;
            active_figura1.classList.remove('active');
            active_figura2.classList.add('active');

        }
    
    });

    const food_figure = document.querySelector('.food_figure');
    const snake_food_figura1 = document.querySelectorAll('.snake_figura12');
    const food_colors1 = document.querySelector('.food_colors');
    const food_color = document.querySelectorAll('.food_color');

    // snake color
    const color_b = document.querySelector('.tab_color');
    const color_btn_click = document.querySelector('.color_btn');
    const active_color_snake = document.querySelector('.active_color_snake');

    function hidetabsContent_snake_color(){
        color_active.forEach(element =>{
            element.classList.remove('active');
        });

    }
    function showTabContent_snake_color(i = 0){
        color_active[i].classList.add('active');
        
    }   

    color_b.addEventListener('click', (element)=>{
        const target = element.target;
        if(target && target.classList.contains('color_active')){
            color_active.forEach((item, index)=>{
                if(target == item){
                    hidetabsContent_snake_color();
                    showTabContent_snake_color(index);
        }
      });}
    });
    
    color_btn_click.addEventListener('click', ()=>{
        color_active.forEach((e, i) => {
            if(e.classList.contains('active')){
                active_color_snake.style.background = color[i];     
            }
        });
    });

    function hidetabsContent_snake_food(){
        snake_food_figura1.forEach((element) =>{
            element.classList.remove('active');
        });

    }
    function showTabContent_snake_food(i = 0){
        snake_food_figura1[i].classList.add('active');
    }   

    food_figure.addEventListener('click', (element)=>{
        const target = element.target
        if(target && target.classList.contains('snake_figura12')){
            snake_food_figura1.forEach((item,index)=>{
                if(target == item){
                    hidetabsContent_snake_food();
                    showTabContent_snake_food(index)
                }
            });
        }
    });

    function hidetabsContent_snake_food1(){
        food_color.forEach(element=>{
            element.classList.remove('active')
        });
    }
    function showTabContent_snake_food1(i = 0){
        food_color[i].classList.add('active');
    }   

    food_colors1.addEventListener('click', (element)=>{
        const target = element.target;
        if(target && target.classList.contains('food_color')){
            food_color.forEach((item,index)=>{
                if(target == item){
                    hidetabsContent_snake_food1();
                    showTabContent_snake_food1(index);
                }
            })
        }
    });

    // <------------!!!!!!---------!!!!!!-------->
    // snake setting
    // <------------!!!!!!---------!!!!!!-------->
    const theme = document.querySelector('.theme');
    const theme_save = document.querySelector('.theme_save');
    const theme_item = document.querySelectorAll('.theme_item');


    function hidetabsContent_snake_theme(){
        theme_item.forEach(element=>{
            element.classList.remove('active')
        });
    }
    function showTabContent_snake_theme(i = 0){
        theme_item[i].classList.add('active');
    }   
    theme.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && target.classList.contains('theme_item')){
            theme_item.forEach((item, index)=>{
                if(target == item){
                    hidetabsContent_snake_theme();
                    showTabContent_snake_theme(index)
                }    
            });
    }
    });

    const fon_theme_color = document.querySelectorAll('.fon_theme_color');
    const text_js = document.querySelectorAll('.text_js');
    const btn_input_color_js = document.querySelectorAll('.btn_input_color_js');
    theme_save.addEventListener('click',()=>{
        if(theme_item[0].classList.contains('active') == true){
            fon_theme_color.forEach(e=>{
                e.style.background = '#eee'
            })
            text_js.forEach(e=>{
                e.style.color = '#000'
            })
            btn_input_color_js.forEach(e=>{
                e.style.background = '#082dd3'
            });
            localStorage.setItem('theme', 'white');
        }
        else if(theme_item[1].classList.contains('active') == true){
            fon_theme_color.forEach(e=>{
                e.style.background = '#000'
            })
            text_js.forEach(e=>{
                e.style.color = '#fff'
            })
            btn_input_color_js.forEach(e=>{
                e.style.background = ' rgb(119, 0, 255)'
            });
            localStorage.setItem('theme', 'dark');
        }
        else if(theme_item[2].classList.contains('active') == true){
            fon_theme_color.forEach(e=>{
                e.style.background = ''
            })
            text_js.forEach(e=>{
                e.style.color = ''
            })
            btn_input_color_js.forEach(e=>{
                e.style.background = ''
            });
            localStorage.setItem('theme', 'defaut');
        }
    })
    if(localStorage.getItem('theme') == 'dark'){
        fon_theme_color.forEach(e=>{
            e.style.background = '#000'
        })
        text_js.forEach(e=>{
            e.style.color = '#fff'
        })
        btn_input_color_js.forEach(e=>{
            e.style.background = ' rgb(119, 0, 255)'
        });
        localStorage.setItem('theme', 'dark');
    }
    else if(localStorage.getItem('theme') == 'white'){
        fon_theme_color.forEach(e=>{
            e.style.background = '#eee'
        })
        text_js.forEach(e=>{
            e.style.color = '#000'
        })
        btn_input_color_js.forEach(e=>{
            e.style.background = '#082dd3'
        });
        localStorage.setItem('theme', 'white');
    }
    else if(localStorage.getItem('theme') == 'defaut'){
        fon_theme_color.forEach(e=>{
            e.style.background = ''
        })
        text_js.forEach(e=>{
            e.style.color = ''
        })
        btn_input_color_js.forEach(e=>{
            e.style.background = ''
        });
        localStorage.setItem('theme', 'defaut');
    }
    

});    
    