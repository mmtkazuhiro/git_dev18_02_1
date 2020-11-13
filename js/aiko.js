$(function() {
    // 最初は.aite_teと.jibun_teを非表示にしておく
    $(".kakusu").hide();


    $(".hajimeru").on("click", function () {
        // .haikeiを非表示
         $(".haikei").fadeOut(1000);
         $(".taitoru").fadeOut();
         $(".hajimeru").fadeOut();
        // .aite_teと.jibun_teを表示
        $(".kakusu").fadeIn(2000);
      });

});


$(".hajimeru").on("click", function () {

    var score = 0;
    var interval = 400;
    function getScore() {
        var target = document.getElementById('score');
        target.textContent = score;
      }

      var count = 0;
      var second = setInterval(function(){
      console.log(count++); //コンソールに1秒ごと0から順番にカウントアップする数字を表示
      }, 10);





    var aite11 = Math.floor(Math.random() *3);
    console.log(aite11, "ランダムな手が出る");

    if(aite11 == 0){
        console.log("グー")
        $('.ch11').hide();
        $('.pa11').hide();
            
    }else if(aite11 == 1){
        console.log("チョキ")
        $('.gu11').hide();
        $('.pa11').hide();
    }else if(aite11 == 2){
        console.log("パー")
        $('.gu11').hide();
        $('.ch11').hide();
    }

    document.addEventListener('keydown', function(event) {
    if(aite11 == 0 && count>1228 && count<1268 && event.code == 'KeyG'){
        console.log('あいこ'); 
        score += 100; // 得点を足す

        // 得点追加の処理
        getScore();
    }else if(aite11 == 1 && count>1228 && count<1268 && event.code == 'KeyG'){
        console.log('かち'); 
        score += 200; // 得点を足す

        // 得点追加の処理
        getScore();
    }else if(aite11 == 1 && count>1228 && count<1268 && event.code == 'KeyG'){
        console.log('まけ'); 
        score -= 200; // 得点を足す

        // 得点追加の処理
        getScore();
    }
    });

    document.addEventListener('keydown', function(event) {
        if(aite11 == 0 && count>1228 && count<1268 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
            score -= 100; // 得点を足す
            // 得点追加の処理
            getScore();
    }else if(aite11 == 1 && count>1228 && count<1268 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
            score += 100; // 得点を足す
            // 得点追加の処理
            getScore();
        }else if(aite11 == 1 && count>1228 && count<1268 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
            score += 200; // 得点を足す
            // 得点追加の処理
            getScore();
    }
    });

    document.addEventListener('keydown', function(event) {
        if(aite11 == 0 && count>1228 && count<1268 && event.code == 'KeyP'){
            console.log('かち'); score += 200; getScore();
                score += 200; // 得点を足す
                // 得点追加の処理
                getScore();
    }else if(aite11 == 1 && count>1228 && count<1268 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
                score -= 100; // 得点を足す
                // 得点追加の処理
                getScore();
            }else if(aite11 == 1 && count>1228 && count<1268 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
                score += 100; // 得点を足す
                // 得点追加の処理
                getScore();
    }
    });

    var aite22 = Math.floor(Math.random() *3);
    console.log(aite22, "ランダムな手が出る");
    
    if(aite22 == 0){
        console.log("グー")
        $('.ch22').hide();
        $('.pa22').hide();
            
    }else if(aite22 == 1){
        console.log("チョキ")
        $('.gu22').hide();
        $('.pa22').hide();
    }else if(aite22 == 2){
        console.log("パー")
        $('.gu22').hide();
        $('.ch22').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite22 == 0 &&  count >= 1385 && count <= 1425 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite22 == 1 && count >= 1385 && count <= 1425 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite22 == 2 && count >= 1385 && count <= 1425 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite22 == 0 && count >= 1385 && count<= 1425 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite22 == 1 && count >= 1385 && count<= 1425 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite22 == 2 && count >= 1385 && count<= 1425 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite22 == 0 && count >= 1385 && count<= 1425 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite22 == 1 && count >= 1385 && count<= 1425 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite22 == 2 && count >= 1385 && count<= 1425 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    
    var aite33 = Math.floor(Math.random() *3);
    console.log(aite33, "ランダムな手が出る");
    
    if(aite33 == 0){
        console.log("グー")
        $('.ch33').hide();
        $('.pa33').hide();
            
    }else if(aite33 == 1){
        console.log("チョキ")
        $('.gu33').hide();
        $('.pa33').hide();
    }else if(aite33 == 2){
        console.log("パー")
        $('.gu33').hide();
        $('.ch33').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite33 == 0 &&  count >= 1551 && count <= 1591 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite33 == 1 && count >= 1551 && count <= 1591 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite33 == 2 && count >= 1551 && count <= 1591 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite33 == 0 && count >= 1551 && count<= 1591 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite33 == 1 && count >= 1551 && count<= 1591 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite33 == 2 && count >= 1551 && count<= 1591 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite33 == 0 && count >= 1551 && count<= 1591 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite33 == 1 && count >= 1551 && count<= 1591 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite33 == 2 && count >= 1551 && count<= 1591 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite44 = Math.floor(Math.random() *3);
    console.log(aite44, "ランダムな手が出る");
    
    if(aite44 == 0){
        console.log("グー")
        $('.ch44').hide();
        $('.pa44').hide();
            
    }else if(aite44 == 1){
        console.log("チョキ")
        $('.gu44').hide();
        $('.pa44').hide();
    }else if(aite44 == 2){
        console.log("パー")
        $('.gu44').hide();
        $('.ch44').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite44 == 0 &&  count >= 1712 && count <= 1752 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite44 == 1 && count >= 1712 && count <= 1752 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite44 == 2 && count >= 1712 && count <= 1752 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite44 == 0 && count >= 1712 && count<= 1752 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite44 == 1 && count >= 1712 && count<= 1752 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite44 == 2 && count >= 1712 && count<= 1752 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite44 == 0 && count >= 1712 && count<= 1752 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite44 == 1 && count >= 1712 && count<= 1752 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite44 == 2 && count >= 1712 && count<= 1752 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite55 = Math.floor(Math.random() *3);
    console.log(aite55, "ランダムな手が出る");
    
    if(aite55 == 0){
        console.log("グー")
        $('.ch55').hide();
        $('.pa55').hide();
            
    }else if(aite55 == 1){
        console.log("チョキ")
        $('.gu55').hide();
        $('.pa55').hide();
    }else if(aite55 == 2){
        console.log("パー")
        $('.gu55').hide();
        $('.ch55').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite55 == 0 &&  count >= 1866 && count <= 1906 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite55 == 1 && count >= 1866 && count <= 1906 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite55 == 2 && count >= 1866 && count <= 1906 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite55 == 0 && count >= 1866 && count<= 1906 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite55 == 1 && count >= 1866 && count<= 1906 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite55 == 2 && count >= 1866 && count<= 1906 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite55 == 0 && count >= 1866 && count<= 1906 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite55 == 1 && count >= 1866 && count<= 1906 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite55 == 2 && count >= 1866 && count<= 1906 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite66 = Math.floor(Math.random() *3);
    console.log(aite66, "ランダムな手が出る");
    
    if(aite66 == 0){
        console.log("グー")
        $('.ch66').hide();
        $('.pa66').hide();
            
    }else if(aite66 == 1){
        console.log("チョキ")
        $('.gu66').hide();
        $('.pa66').hide();
    }else if(aite66 == 2){
        console.log("パー")
        $('.gu66').hide();
        $('.ch66').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite66 == 0 &&  count >= 2035 && count <= 2075 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite66 == 1 && count >= 2075 && count <= 2160 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite66 == 2 && count >= 2075 && count <= 2160 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite66 == 0 && count >= 2035 && count<= 2075 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite66 == 1 && count >= 2035 && count<= 2075 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite66 == 2 && count >= 2035 && count<= 2075 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite66 == 0 && count >= 2035 && count<= 2075 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite66 == 1 && count >= 2035 && count<= 2075 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite66 == 2 && count >= 2035 && count<= 2075 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite77 = Math.floor(Math.random() *3);
    console.log(aite77, "ランダムな手が出る");
    
    if(aite77 == 0){
        console.log("グー")
        $('.ch77').hide();
        $('.pa77').hide();
            
    }else if(aite77 == 1){
        console.log("チョキ")
        $('.gu77').hide();
        $('.pa77').hide();
    }else if(aite77 == 2){
        console.log("パー")
        $('.gu77').hide();
        $('.ch77').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite77 == 0 &&  count >= 2197 && count <= 2237 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite77 == 1 && count >= 2197 && count <= 2237 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite77 == 2 && count >= 2197 && count <= 2237 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite77 == 0 && count >= 2197 && count<= 2237 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite77 == 1 && count >= 2197 && count<= 2237 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite77 == 2 && count >= 2197 && count<= 2237 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite77 == 0 && count >= 2197 && count<= 2237 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite77 == 1 && count >= 2197 && count<= 2237 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite77 == 2 && count >= 2197 && count<= 2237 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    
    var aite88 = Math.floor(Math.random() *3);
    console.log(aite88, "ランダムな手が出る");
    
    if(aite88 == 0){
        console.log("グー")
        $('.ch88').hide();
        $('.pa88').hide();
            
    }else if(aite88 == 1){
        console.log("チョキ")
        $('.gu88').hide();
        $('.pa88').hide();
    }else if(aite88 == 2){
        console.log("パー")
        $('.gu88').hide();
        $('.ch88').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite88 == 0 &&  count >= 2352 && count <= 2392 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite88 == 1 && count >= 2352 && count <= 2392 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite88 == 2 && count >= 2352 && count <= 2392 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite88 == 0 && count >= 2352 && count<= 2392 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite88 == 1 && count >= 2352 && count<= 2392 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite88 == 2 && count >= 2352 && count<= 2392 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite88 == 0 && count >= 2352 && count<= 2392 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite88 == 1 && count >= 2352 && count<= 2392 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite88 == 2 && count >= 2352 && count<= 2392 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite99 = Math.floor(Math.random() *3);
    console.log(aite99, "ランダムな手が出る");
    
    if(aite99 == 0){
        console.log("グー")
        $('.ch99').hide();
        $('.pa99').hide();
            
    }else if(aite99 == 1){
        console.log("チョキ")
        $('.gu99').hide();
        $('.pa99').hide();
    }else if(aite99 == 2){
        console.log("パー")
        $('.gu99').hide();
        $('.ch99').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite99 == 0 &&  count >= 2442 && count <= 2482 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite99 == 1 && count >= 2442 && count <= 2482 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite99 == 2 && count >= 2442 && count <= 2482 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite99 == 0 && count >= 2442 && count<= 2482 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite99 == 1 && count >= 2442 && count<= 2482 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite99 == 2 && count >= 2442 && count<= 2482 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite99 == 0 && count >= 2442 && count<= 2482 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite99 == 1 && count >= 2442 && count<= 2482 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite99 == 2 && count >= 2442 && count<= 2482 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite100 = Math.floor(Math.random() *3);
    console.log(aite100, "ランダムな手が出る");
    
    if(aite100 == 0){
        console.log("グー")
        $('.ch100').hide();
        $('.pa100').hide();
            
    }else if(aite100 == 1){
        console.log("チョキ")
        $('.gu100').hide();
        $('.pa100').hide();
    }else if(aite100 == 2){
        console.log("パー")
        $('.gu100').hide();
        $('.ch100').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite100 == 0 &&  count >= 2516 && count <= 2556 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite100 == 1 && count >= 2516 && count <= 2556 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite100 == 2 && count >= 2516 && count <= 2556 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite100 == 0 && count >= 2516 && count<= 2556 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite100 == 1 && count >= 2516 && count<= 2556 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite100 == 2 && count >= 2516 && count<= 2556 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite100 == 0 && count >= 2516 && count<= 2556 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite100 == 1 && count >= 2516 && count<= 2556 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite100 == 2 && count >= 2516 && count<= 2556 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite110 = Math.floor(Math.random() *3);
    console.log(aite110, "ランダムな手が出る");
    
    if(aite110 == 0){
        console.log("グー")
        $('.ch110').hide();
        $('.pa110').hide();
            
    }else if(aite110 == 1){
        console.log("チョキ")
        $('.gu110').hide();
        $('.pa110').hide();
    }else if(aite110 == 2){
        console.log("パー")
        $('.gu110').hide();
        $('.ch110').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite110 == 0 &&  count >= 2599 && count <= 2639 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite110 == 1 && count >= 2599 && count <= 2639 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite110 == 2 && count >= 2599 && count <= 2639 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite110 == 0 && count >= 2599 && count<= 2639 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite110 == 1 && count >= 2599 && count<= 2639 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite110 == 2 && count >= 2599 && count<= 2639 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite110 == 0 && count >= 2599 && count<= 2639 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite110 == 1 && count >= 2599 && count<= 2639 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite110 == 2 && count >= 2599 && count<= 2639 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite120 = Math.floor(Math.random() *3);
    console.log(aite120, "ランダムな手が出る");
    
    if(aite120 == 0){
        console.log("グー")
        $('.ch120').hide();
        $('.pa120').hide();
            
    }else if(aite120 == 1){
        console.log("チョキ")
        $('.gu120').hide();
        $('.pa120').hide();
    }else if(aite120 == 2){
        console.log("パー")
        $('.gu120').hide();
        $('.ch120').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite120 == 0 &&  count >= 2763 && count <= 2803 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite120 == 1 && count >= 2763 && count <= 2803 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite120 == 2 && count >= 2763 && count <= 2803 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite120 == 0 && count >= 2763 && count<= 2803 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite120 == 1 && count >= 2763 && count<= 2803 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite120 == 2 && count >= 2763 && count<= 2803 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite120 == 0 && count >= 2763 && count<= 2803 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite120 == 1 && count >= 2763 && count<= 2803 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite120 == 2 && count >= 2763 && count<= 2803 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite130 = Math.floor(Math.random() *3);
    console.log(aite130, "ランダムな手が出る");
    
    if(aite130 == 0){
        console.log("グー")
        $('.ch130').hide();
        $('.pa130').hide();
            
    }else if(aite130 == 1){
        console.log("チョキ")
        $('.gu130').hide();
        $('.pa130').hide();
    }else if(aite130 == 2){
        console.log("パー")
        $('.gu130').hide();
        $('.ch130').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite130 == 0 &&  count >= 2847 && count <= 2897 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite130 == 1 && count >= 2847 && count <= 2897 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite130 == 2 && count >= 2847 && count <= 2897 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite130 == 0 && count >= 2847 && count<= 2897 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite130 == 1 && count >= 2847 && count<= 2897 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite130 == 2 && count >= 2847 && count<= 2897 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite130 == 0 && count >= 2847 && count<= 2897 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite130 == 1 && count >= 2847 && count<= 2897 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite130 == 2 && count >= 2847 && count<= 2897 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite140 = Math.floor(Math.random() *3);
    console.log(aite140, "ランダムな手が出る");
    
    if(aite140 == 0){
        console.log("グー")
        $('.ch140').hide();
        $('.pa140').hide();
            
    }else if(aite140 == 1){
        console.log("チョキ")
        $('.gu140').hide();
        $('.pa140').hide();
    }else if(aite140 == 2){
        console.log("パー")
        $('.gu140').hide();
        $('.ch140').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite140 == 0 &&  count >= 2917 && count <= 2967 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite140 == 1 && count >= 2917 && count <= 2967 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite140 == 2 && count >= 2917 && count <= 2967 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite140 == 0 && count >= 2917 && count<= 2967 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite140 == 1 && count >= 2917 && count<= 2967 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite140 == 2 && count >= 2917 && count<= 2967 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite140 == 0 && count >= 2917 && count<= 2967 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite140 == 1 && count >= 2917 && count<= 2967 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite140 == 2 && count >= 2917 && count<= 2967 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite150 = Math.floor(Math.random() *3);
    console.log(aite150, "ランダムな手が出る");
    
    if(aite150 == 0){
        console.log("グー")
        $('.ch150').hide();
        $('.pa150').hide();
            
    }else if(aite150 == 1){
        console.log("チョキ")
        $('.gu150').hide();
        $('.pa150').hide();
    }else if(aite150 == 2){
        console.log("パー")
        $('.gu150').hide();
        $('.ch150').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite150 == 0 &&  count >= 2995 && count <= 3045 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite150 == 1 && count >= 2995 && count <= 3045 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite150 == 2 && count >= 2995 && count <= 3045 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite150 == 0 && count >= 2995 && count<= 3045 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite150 == 1 && count >= 2995 && count<= 3045 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite150 == 2 && count >= 2995 && count<= 3045 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite150 == 0 && count >= 2995 && count<= 3045 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite150 == 1 && count >= 2995 && count<= 3045 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite150 == 2 && count >= 2995 && count<= 3045 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite160 = Math.floor(Math.random() *3);
    console.log(aite160, "ランダムな手が出る");
    
    if(aite160 == 0){
        console.log("グー")
        $('.ch160').hide();
        $('.pa160').hide();
            
    }else if(aite160 == 1){
        console.log("チョキ")
        $('.gu160').hide();
        $('.pa160').hide();
    }else if(aite160 == 2){
        console.log("パー")
        $('.gu160').hide();
        $('.ch160').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite160 == 0 &&  count >= 3076 && count <= 3126 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite160 == 1 && count >= 3076 && count <= 3126 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite160 == 2 && count >= 3076 && count <= 3126 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite160 == 0 && count >= 3076 && count<= 3126 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite160 == 1 && count >= 3076 && count<= 3126 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite160 == 2 && count >= 3076 && count<= 3126 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite160 == 0 && count >= 3076 && count<= 3126 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite160 == 1 && count >= 3076 && count<= 3126 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite160 == 2 && count >= 3076 && count<= 3126 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite170 = Math.floor(Math.random() *3);
    console.log(aite170, "ランダムな手が出る");
    
    if(aite170 == 0){
        console.log("グー")
        $('.ch170').hide();
        $('.pa170').hide();
            
    }else if(aite170 == 1){
        console.log("チョキ")
        $('.gu170').hide();
        $('.pa170').hide();
    }else if(aite170 == 2){
        console.log("パー")
        $('.gu170').hide();
        $('.ch170').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite170 == 0 &&  count >= 3150 && count <= 3200 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite170 == 1 && count >= 3150 && count <= 3200 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite170 == 2 && count >= 3150 && count <= 3200 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite170 == 0 && count >= 3150 && count<= 3200 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite170 == 1 && count >= 3150 && count<= 3200 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite170 == 2 && count >= 3150 && count<= 3200 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite170 == 0 && count >= 3150 && count<= 3200 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite170 == 1 && count >= 3150 && count<= 3200 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite170 == 2 && count >= 3150 && count<= 3200 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite180 = Math.floor(Math.random() *3);
    console.log(aite180, "ランダムな手が出る");
    
    if(aite180 == 0){
        console.log("グー")
        $('.ch180').hide();
        $('.pa180').hide();
            
    }else if(aite180 == 1){
        console.log("チョキ")
        $('.gu180').hide();
        $('.pa180').hide();
    }else if(aite180 == 2){
        console.log("パー")
        $('.gu180').hide();
        $('.ch180').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite180 == 0 &&  count >= 3236 && count <= 3286 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite180 == 1 && count >= 3236 && count <= 3286 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite180 == 2 && count >= 3236 && count <= 3286 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite180 == 0 && count >= 3236 && count<= 3286 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite180 == 1 && count >= 3236 && count<= 3286 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite180 == 2 && count >= 3236 && count<= 3286 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite180 == 0 && count >= 3236 && count<= 3286 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite180 == 1 && count >= 3236 && count<= 3286 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite180 == 2 && count >= 3236 && count<= 3286 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    // 21, 30, 106に要注意！！！！
    
    
    
    var aite190 = Math.floor(Math.random() *3);
    console.log(aite190, "ランダムな手が出る");
    
    if(aite190 == 0){
        console.log("グー")
        $('.ch190').hide();
        $('.pa190').hide();
            
    }else if(aite190 == 1){
        console.log("チョキ")
        $('.gu190').hide();
        $('.pa190').hide();
    }else if(aite190 == 2){
        console.log("パー")
        $('.gu190').hide();
        $('.ch190').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite190 == 0 &&  count >= 3313 && count <= 3363 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite190 == 1 && count >= 3313 && count <= 3363 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite190 == 2 && count >= 3313 && count <= 3363 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite190 == 0 && count >= 3313 && count<= 3363 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite190 == 1 && count >= 3313 && count<= 3363 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite190 == 2 && count >= 3313 && count<= 3363 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite190 == 0 && count >= 3313 && count<= 3363 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite190 == 1 && count >= 3313 && count<= 3363 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite190 == 2 && count >= 3313 && count<= 3363 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite200 = Math.floor(Math.random() *3);
    console.log(aite200, "ランダムな手が出る");
    
    if(aite200 == 0){
        console.log("グー")
        $('.ch200').hide();
        $('.pa200').hide();
            
    }else if(aite200 == 1){
        console.log("チョキ")
        $('.gu200').hide();
        $('.pa200').hide();
    }else if(aite200 == 2){
        console.log("パー")
        $('.gu200').hide();
        $('.ch200').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite200 == 0 &&  count >= 3394 && count <= 3444 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite200 == 1 && count >= 3394 && count <= 3444 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite200 == 2 && count >= 3394 && count <= 3444 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite200 == 0 && count >= 3394 && count<= 3444 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite200 == 1 && count >= 3394 && count<= 3444 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite200 == 2 && count >= 3394 && count<= 3444 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite200 == 0 && count >= 3394 && count<= 3444 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite200 == 1 && count >= 3394 && count<= 3444 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite200 == 2 && count >= 3394 && count<= 3444 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite210 = Math.floor(Math.random() *3);
    console.log(aite210, "ランダムな手が出る");
    
    if(aite210 == 0){
        console.log("グー")
        $('.ch210').hide();
        $('.pa210').hide();
            
    }else if(aite210 == 1){
        console.log("チョキ")
        $('.gu210').hide();
        $('.pa210').hide();
    }else if(aite210 == 2){
        console.log("パー")
        $('.gu210').hide();
        $('.ch210').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite210 == 0 &&  count >= 3472 && count <= 3522 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite210 == 1 && count >= 3472 && count <= 3522 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite210 == 2 && count >= 3472 && count <= 3522 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite210 == 0 && count >= 3472 && count<= 3522 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite210 == 1 && count >= 3472 && count<= 3522 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite210 == 2 && count >= 3472 && count<= 3522 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite210 == 0 && count >= 3472 && count<= 3522 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite210 == 1 && count >= 3472 && count<= 3522 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite210 == 2 && count >= 3472 && count<= 3522 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    

        document.addEventListener('keydown', function(event) {
    if(aite210 == 0 &&  count >= 3472 && count <= 3522 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite210 == 1 && count >= 3472 && count <= 3522 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite210 == 2 && count >= 3472 && count <= 3522 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite210 == 0 && count >= 3472 && count<= 3522 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite210 == 1 && count >= 3472 && count<= 3522 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite210 == 2 && count >= 3472 && count<= 3522 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite210 == 0 && count >= 3472 && count<= 3522 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite210 == 1 && count >= 3472 && count<= 3522 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite210 == 2 && count >= 3472 && count<= 3522 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });

    var aite220 = Math.floor(Math.random() *3);
    console.log(aite210, "ランダムな手が出る");
    
    if(aite220 == 0){
        console.log("グー")
        $('.ch210').hide();
        $('.pa210').hide();
            
    }else if(aite220 == 1){
        console.log("チョキ")
        $('.gu210').hide();
        $('.pa210').hide();
    }else if(aite220 == 2){
        console.log("パー")
        $('.gu210').hide();
        $('.ch210').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite220 == 0 &&  count >= 3558 && count <= 3608 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite220 == 1 && count >= 3558 && count <= 3608 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite220 == 2 && count >= 3558 && count <= 3608 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite220 == 0 && count >= 3558 && count<= 3608 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite220 == 1 && count >= 3558 && count<= 3608 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite220 == 2 && count >= 3558 && count<= 3608 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite220 == 0 && count >= 3558 && count<= 3608 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite220 == 1 && count >= 3558 && count<= 3608 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite220 == 2 && count >= 3558 && count<= 3608 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    


    
    var aite230 = Math.floor(Math.random() *3);
    console.log(aite230, "ランダムな手が出る");
    
    if(aite230 == 0){
        console.log("グー")
        $('.ch230').hide();
        $('.pa230').hide();
            
    }else if(aite230 == 1){
        console.log("チョキ")
        $('.gu230').hide();
        $('.pa230').hide();
    }else if(aite230 == 2){
        console.log("パー")
        $('.gu230').hide();
        $('.ch230').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite230 == 0 &&  count >= 3635 && count <= 3685 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite230 == 1 && count >= 3635 && count <= 3685 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite230 == 2 && count >= 3635 && count <= 3685 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite230 == 0 && count >= 3635 && count<= 3685 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite230 == 1 && count >= 3635 && count<= 3685 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite230 == 2 && count >= 3635 && count<= 3685 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite230 == 0 && count >= 3635 && count<= 3759 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite230 == 1 && count >= 3635 && count<= 3759 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite230 == 2 && count >= 3635 && count<= 3759 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite240 = Math.floor(Math.random() *3);
    console.log(aite240, "ランダムな手が出る");
    
    if(aite240 == 0){
        console.log("グー")
        $('.ch240').hide();
        $('.pa240').hide();
            
    }else if(aite240 == 1){
        console.log("チョキ")
        $('.gu240').hide();
        $('.pa240').hide();
    }else if(aite240 == 2){
        console.log("パー")
        $('.gu240').hide();
        $('.ch240').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite240 == 0 &&  count >= 3709 && count <= 3759 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite240 == 1 && count >= 3709 && count <= 3759 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite240 == 2 && count >= 3709 && count <= 3759 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite240 == 0 && count >= 3709 && count<= 3759 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite240 == 1 && count >= 3709 && count<= 3759 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite240 == 2 && count >= 3709 && count<= 3759 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite240 == 0 && count >= 3709 && count<= 3759 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite240 == 1 && count >= 3709 && count<= 3759 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite240 == 2 && count >= 3709 && count<= 3759 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite250 = Math.floor(Math.random() *3);
    console.log(aite250, "ランダムな手が出る");
    
    if(aite250 == 0){
        console.log("グー")
        $('.ch250').hide();
        $('.pa250').hide();
            
    }else if(aite250 == 1){
        console.log("チョキ")
        $('.gu250').hide();
        $('.pa250').hide();
    }else if(aite250 == 2){
        console.log("パー")
        $('.gu250').hide();
        $('.ch250').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite250 == 0 &&  count >= 3795 && count <= 3845 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite250 == 1 && count >= 3795 && count <= 3845 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite250 == 2 && count >= 3795 && count <= 3845 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite250 == 0 && count >= 3795 && count<= 3845 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite250 == 1 && count >= 3795 && count<= 3845 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite250 == 2 && count >= 3795 && count<= 3845 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite250 == 0 && count >= 3795 && count<= 3845 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite250 == 1 && count >= 3795 && count<= 3845 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite250 == 2 && count >= 3795 && count<= 3845 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite260 = Math.floor(Math.random() *3);
    console.log(aite260, "ランダムな手が出る");
    
    if(aite260 == 0){
        console.log("グー")
        $('.ch260').hide();
        $('.pa260').hide();
            
    }else if(aite260 == 1){
        console.log("チョキ")
        $('.gu260').hide();
        $('.pa260').hide();
    }else if(aite260 == 2){
        console.log("パー")
        $('.gu260').hide();
        $('.ch260').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite260 == 0 &&  count >= 3881 && count <= 3931 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite260 == 1 && count >= 3881 && count <= 3931 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite260 == 2 && count >= 3881 && count <= 3931 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite260 == 0 && count >= 3881 && count<= 3931 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite260 == 1 && count >= 3881 && count<= 3931 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite260 == 2 && count >= 3881 && count<= 3931 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite260 == 0 && count >= 3881 && count<= 3931 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite260 == 1 && count >= 3881 && count<= 3931 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite260 == 2 && count >= 3881 && count<= 3931 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite270 = Math.floor(Math.random() *3);
    console.log(aite270, "ランダムな手が出る");
    
    if(aite270 == 0){
        console.log("グー")
        $('.ch270').hide();
        $('.pa270').hide();
            
    }else if(aite270 == 1){
        console.log("チョキ")
        $('.gu270').hide();
        $('.pa270').hide();
    }else if(aite270 == 2){
        console.log("パー")
        $('.gu270').hide();
        $('.ch270').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite270 == 0 &&  count >= 3953 && count <= 4003 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite270 == 1 && count >= 3953 && count <= 4003 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite270 == 2 && count >= 3953 && count <= 4003 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite270 == 0 && count >= 3953 && count<= 4003 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite270 == 1 && count >= 3953 && count<= 4003 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite270 == 2 && count >= 3953 && count<= 4003 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite270 == 0 && count >= 3953 && count<= 4003 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite270 == 1 && count >= 3953 && count<= 4003 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite270 == 2 && count >= 3953 && count<= 4003 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite280 = Math.floor(Math.random() *3);
    console.log(aite280, "ランダムな手が出る");
    
    if(aite280 == 0){
        console.log("グー")
        $('.ch280').hide();
        $('.pa280').hide();
            
    }else if(aite280 == 1){
        console.log("チョキ")
        $('.gu280').hide();
        $('.pa280').hide();
    }else if(aite280 == 2){
        console.log("パー")
        $('.gu280').hide();
        $('.ch280').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite280 == 0 &&  count >= 4039 && count <= 4089 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite280 == 1 && count >= 4039 && count <= 4089 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite280 == 2 && count >= 4039 && count <= 4089 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite280 == 0 && count >= 4039 && count<= 4089 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite280 == 1 && count >= 4039 && count<= 4089 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite280 == 2 && count >= 4039 && count<= 4089 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite280 == 0 && count >= 4039 && count<= 4089 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite280 == 1 && count >= 4039 && count<= 4089 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite280 == 2 && count >= 4039 && count<= 4089 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite290 = Math.floor(Math.random() *3);
    console.log(aite290, "ランダムな手が出る");
    
    if(aite290 == 0){
        console.log("グー")
        $('.ch290').hide();
        $('.pa290').hide();
            
    }else if(aite290 == 1){
        console.log("チョキ")
        $('.gu290').hide();
        $('.pa290').hide();
    }else if(aite290 == 2){
        console.log("パー")
        $('.gu290').hide();
        $('.ch290').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite290 == 0 &&  count >= 4114 && count <= 4164 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite290 == 1 && count >= 4114 && count <= 4164 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite290 == 2 && count >= 4114 && count <= 4164 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite290 == 0 && count >= 4114 && count<= 4164 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite290 == 1 && count >= 4114 && count<= 4164 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite290 == 2 && count >= 4114 && count<= 4164 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite290 == 0 && count >= 4114 && count<= 4164 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite290 == 1 && count >= 4114 && count<= 4164 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite290 == 2 && count >= 4114 && count<= 4164 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite300 = Math.floor(Math.random() *3);
    console.log(aite300, "ランダムな手が出る");
    
    if(aite300 == 0){
        console.log("グー")
        $('.ch300').hide();
        $('.pa300').hide();
            
    }else if(aite300 == 1){
        console.log("チョキ")
        $('.gu300').hide();
        $('.pa300').hide();
    }else if(aite300 == 2){
        console.log("パー")
        $('.gu300').hide();
        $('.ch300').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite300 == 0 &&  count >= 4211 && count <= 4241 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite300 == 1 && count >= 4211 && count <= 4241 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite300 == 2 && count >= 4211 && count <= 4241 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite300 == 0 && count >= 4211 && count<= 4241 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite300 == 1 && count >= 4211 && count<= 4241 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite300 == 2 && count >= 4211 && count<= 4241 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite300 == 0 && count >= 4211 && count<= 4241 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite300 == 1 && count >= 4211 && count<= 4241 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite300 == 2 && count >= 4211 && count<= 4241 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite310 = Math.floor(Math.random() *3);
    console.log(aite310, "ランダムな手が出る");
    
    if(aite310 == 0){
        console.log("グー")
        $('.ch310').hide();
        $('.pa310').hide();
            
    }else if(aite310 == 1){
        console.log("チョキ")
        $('.gu310').hide();
        $('.pa310').hide();
    }else if(aite310 == 2){
        console.log("パー")
        $('.gu310').hide();
        $('.ch310').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite310 == 0 &&  count >= 4242 && count <= 4292 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite310 == 1 && count >= 4242 && count <= 4292 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite310 == 2 && count >= 4242 && count <= 4292 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite310 == 0 && count >= 4242 && count<= 4292 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite310 == 1 && count >= 4242 && count<= 4292 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite310 == 2 && count >= 4242 && count<= 4292 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite310 == 0 && count >= 4242 && count<= 4292 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite310 == 1 && count >= 4242 && count<= 4292 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite310 == 2 && count >= 4242 && count<= 4292 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite320 = Math.floor(Math.random() *3);
    console.log(aite320, "ランダムな手が出る");
    
    if(aite320 == 0){
        console.log("グー")
        $('.ch320').hide();
        $('.pa320').hide();
            
    }else if(aite320 == 1){
        console.log("チョキ")
        $('.gu320').hide();
        $('.pa320').hide();
    }else if(aite320 == 2){
        console.log("パー")
        $('.gu320').hide();
        $('.ch320').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite320 == 0 &&  count >= 4311 && count <= 4353 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite320 == 1 && count >= 4311 && count <= 4353 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite320 == 2 && count >= 4311 && count <= 4353 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite320 == 0 && count >= 4311 && count<= 4353 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite320 == 1 && count >= 4311 && count<= 4353 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite320 == 2 && count >= 4311 && count<= 4353 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite320 == 0 && count >= 4311 && count<= 4353 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite320 == 1 && count >= 4311 && count<= 4353 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite320 == 2 && count >= 4311 && count<= 4353 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite330 = Math.floor(Math.random() *3);
    console.log(aite330, "ランダムな手が出る");
    
    if(aite330 == 0){
        console.log("グー")
        $('.ch330').hide();
        $('.pa330').hide();
            
    }else if(aite330 == 1){
        console.log("チョキ")
        $('.gu330').hide();
        $('.pa330').hide();
    }else if(aite330 == 2){
        console.log("パー")
        $('.gu330').hide();
        $('.ch330').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite330 == 0 &&  count >= 4354 && count <= 4393 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite330 == 1 && count >= 4354 && count <= 4393 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite330 == 2 && count >= 4354 && count <= 4393 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite330 == 0 && count >= 4354 && count<= 4393 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite330 == 1 && count >= 4354 && count<= 4393 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite330 == 2 && count >= 4354 && count<= 4393 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite330 == 0 && count >= 4354 && count<= 4393 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite330 == 1 && count >= 4354 && count<= 4393 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite330 == 2 && count >= 4354 && count<= 4393 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite340 = Math.floor(Math.random() *3);
    console.log(aite340, "ランダムな手が出る");
    
    if(aite340 == 0){
        console.log("グー")
        $('.ch340').hide();
        $('.pa340').hide();
            
    }else if(aite340 == 1){
        console.log("チョキ")
        $('.gu340').hide();
        $('.pa340').hide();
    }else if(aite340 == 2){
        console.log("パー")
        $('.gu340').hide();
        $('.ch340').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite340 == 0 &&  count >= 4394 && count <= 4434 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite340 == 1 && count >= 4394 && count <= 4434 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite340 == 2 && count >= 4394 && count <= 4434 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite340 == 0 && count >= 4394 && count<= 4434 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite340 == 1 && count >= 4394 && count<= 4434 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite340 == 2 && count >= 4394 && count<= 4434 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite340 == 0 && count >= 4394 && count<= 4434 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite340 == 1 && count >= 4394 && count<= 4434 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite340 == 2 && count >= 4394 && count<= 4434 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite350 = Math.floor(Math.random() *3);
    console.log(aite350, "ランダムな手が出る");
    
    if(aite350 == 0){
        console.log("グー")
        $('.ch350').hide();
        $('.pa350').hide();
            
    }else if(aite350 == 1){
        console.log("チョキ")
        $('.gu350').hide();
        $('.pa350').hide();
    }else if(aite350 == 2){
        console.log("パー")
        $('.gu350').hide();
        $('.ch350').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite350 == 0 &&  count >= 4435 && count <= 4475 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite350 == 1 && count >= 4435 && count <= 4475 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite350 == 2 && count >= 4435 && count <= 4475 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite350 == 0 && count >= 4435 && count<= 4475 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite350 == 1 && count >= 4435 && count<= 4475 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite350 == 2 && count >= 4435 && count<= 4475 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite350 == 0 && count >= 4435 && count<= 4475 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite350 == 1 && count >= 4435 && count<= 4475 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite350 == 2 && count >= 4435 && count<= 4475 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite360 = Math.floor(Math.random() *3);
    console.log(aite360, "ランダムな手が出る");
    
    if(aite360 == 0){
        console.log("グー")
        $('.ch360').hide();
        $('.pa360').hide();
            
    }else if(aite360 == 1){
        console.log("チョキ")
        $('.gu360').hide();
        $('.pa360').hide();
    }else if(aite360 == 2){
        console.log("パー")
        $('.gu360').hide();
        $('.ch360').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite360 == 0 &&  count >= 4476 && count <= 4520 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite360 == 1 && count >= 4476 && count <= 4520 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite360 == 2 && count >= 4476 && count <= 4520 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite360 == 0 && count >= 4476 && count<= 4520 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite360 == 1 && count >= 4476 && count<= 4520 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite360 == 2 && count >= 4476 && count<= 4520 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite360 == 0 && count >= 4476 && count<= 4520 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite360 == 1 && count >= 4476 && count<= 4520 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite360 == 2 && count >= 4476 && count<= 4520 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite370 = Math.floor(Math.random() *3);
    console.log(aite370, "ランダムな手が出る");
    
    if(aite370 == 0){
        console.log("グー")
        $('.ch370').hide();
        $('.pa370').hide();
            
    }else if(aite370 == 1){
        console.log("チョキ")
        $('.gu370').hide();
        $('.pa370').hide();
    }else if(aite370 == 2){
        console.log("パー")
        $('.gu370').hide();
        $('.ch370').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite370 == 0 &&  count >= 4521 && count <= 4562 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite370 == 1 && count >= 4521 && count <= 4562 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite370 == 2 && count >= 4521 && count <= 4562 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite370 == 0 && count >= 4521 && count <= 4562 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite370 == 1 && count >= 4521 && count <= 4562 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite370 == 2 && count >= 4521 && count <= 4562 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite370 == 0 && count >= 4604 && count <= 4562 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite370 == 1 && count >= 4604 && count <= 4562 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite370 == 2 && count >= 4604 && count <= 4562 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });

    
    var aite380 = Math.floor(Math.random() *3);
    console.log(aite380, "ランダムな手が出る");
    
    if(aite380 == 0){
        console.log("グー")
        $('.ch380').hide();
        $('.pa380').hide();
            
    }else if(aite380 == 1){
        console.log("チョキ")
        $('.gu380').hide();
        $('.pa380').hide();
    }else if(aite380 == 2){
        console.log("パー")
        $('.gu380').hide();
        $('.ch380').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
        if(aite380 == 0 &&  count >= 4563 && count<= 4603 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite380 == 1 && count >= 4563 && count<= 4603 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite380 == 2 && count >= 4563 && count<= 4603 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite380 == 0 && count >= 4563 && count<= 4603 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite380 == 1 && count >= 4563 && count<= 4603 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite380 == 2 && count >= 4563 && count<= 4603 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite380 == 0 && count >= 4563 && count<= 4603 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite380 == 1 && count >= 4563 && count<= 4603 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite380 == 2 && count >= 4563 && count<= 4603 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite390 = Math.floor(Math.random() *3);
        console.log(aite390, "ランダムな手が出る");
        
        if(aite390 == 0){
            console.log("グー")
            $('.ch390').hide();
            $('.pa390').hide();
                
        }else if(aite390 == 1){
            console.log("チョキ")
            $('.gu390').hide();
            $('.pa390').hide();
        }else if(aite390 == 2){
            console.log("パー")
            $('.gu390').hide();
            $('.ch390').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite390 == 0 &&  count >= 4604 && count<= 4642 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite390 == 1 && count >= 4604 && count<= 4642 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite390 == 2 && count >= 4604 && count<= 4642 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite390 == 0 && count >= 4604 && count<= 4642 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite390 == 1 && count >= 4604 && count<= 4642 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite390 == 2 && count >= 4604 && count<= 4642 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite390 == 0 && count >= 4604 && count<= 4642 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite390 == 1 && count >= 4604 && count<= 4642 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite390 == 2 && count >= 4604 && count<= 4642 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite400 = Math.floor(Math.random() *3);
        console.log(aite400, "ランダムな手が出る");
        
        if(aite400 == 0){
            console.log("グー")
            $('.ch400').hide();
            $('.pa400').hide();
                
        }else if(aite400 == 1){
            console.log("チョキ")
            $('.gu400').hide();
            $('.pa400').hide();
        }else if(aite400 == 2){
            console.log("パー")
            $('.gu400').hide();
            $('.ch400').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite400 == 0 &&  count >= 4643 && count<= 4686 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite400 == 1 && count >= 4643 && count<= 4686 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite400 == 2 && count >= 4643 && count<= 4686 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite400 == 0 && count >= 4643 && count<= 4686 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite400 == 1 && count >= 4643 && count<= 4686 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite400 == 2 && count >= 4643 && count<= 4686 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite400 == 0 && count >= 4643 && count<= 4686 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite400 == 1 && count >= 4643 && count<= 4686 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite400 == 2 && count >= 4643 && count<= 4686 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite410 = Math.floor(Math.random() *3);
        console.log(aite410, "ランダムな手が出る");
        
        if(aite410 == 0){
            console.log("グー")
            $('.ch410').hide();
            $('.pa410').hide();
                
        }else if(aite410 == 1){
            console.log("チョキ")
            $('.gu410').hide();
            $('.pa410').hide();
        }else if(aite410 == 2){
            console.log("パー")
            $('.gu410').hide();
            $('.ch410').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite410 == 0 &&  count >= 4687 && count<= 4737 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite410 == 1 && count >= 4687 && count<= 4737 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite410 == 2 && count >= 4687 && count<= 4737 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite410 == 0 && count >= 4687 && count<= 4737 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite410 == 1 && count >= 4687 && count<= 4737 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite410 == 2 && count >= 4687 && count<= 4737 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite410 == 0 && count >= 4687 && count<= 4737 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite410 == 1 && count >= 4687 && count<= 4737 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite410 == 2 && count >= 4687 && count<= 4737 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite420 = Math.floor(Math.random() *3);
        console.log(aite420, "ランダムな手が出る");
        
        if(aite420 == 0){
            console.log("グー")
            $('.ch420').hide();
            $('.pa420').hide();
                
        }else if(aite420 == 1){
            console.log("チョキ")
            $('.gu420').hide();
            $('.pa420').hide();
        }else if(aite420 == 2){
            console.log("パー")
            $('.gu420').hide();
            $('.ch420').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite420 == 0 &&  count >= 4745 && count<= 4764 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite420 == 1 && count >= 4745 && count<= 4764 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite420 == 2 && count >= 4745 && count<= 4764 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite420 == 0 && count >= 4745 && count<= 4764 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite420 == 1 && count >= 4745 && count<= 4764 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite420 == 2 && count >= 4745 && count<= 4764 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite420 == 0 && count >= 4745 && count<= 4764 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite420 == 1 && count >= 4745 && count<= 4764 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite420 == 2 && count >= 4745 && count<= 4764 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite430 = Math.floor(Math.random() *3);
        console.log(aite430, "ランダムな手が出る");
        
        if(aite430 == 0){
            console.log("グー")
            $('.ch430').hide();
            $('.pa430').hide();
                
        }else if(aite430 == 1){
            console.log("チョキ")
            $('.gu430').hide();
            $('.pa430').hide();
        }else if(aite430 == 2){
            console.log("パー")
            $('.gu430').hide();
            $('.ch430').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite430 == 0 &&  count >= 4765 && count<= 4815 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite430 == 1 && count >= 4765 && count<= 4815 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite430 == 2 && count >= 4765 && count<= 4815 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite430 == 0 && count >= 4765 && count<= 4815 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite430 == 1 && count >= 4765 && count<= 4815 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite430 == 2 && count >= 4765 && count<= 4815 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite430 == 0 && count >= 4765 && count<= 4815 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite430 == 1 && count >= 4765 && count<= 4815 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite430 == 2 && count >= 4765 && count<= 4815 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite440 = Math.floor(Math.random() *3);
        console.log(aite440, "ランダムな手が出る");
        
        if(aite440 == 0){
            console.log("グー")
            $('.ch440').hide();
            $('.pa440').hide();
                
        }else if(aite440 == 1){
            console.log("チョキ")
            $('.gu440').hide();
            $('.pa440').hide();
        }else if(aite440 == 2){
            console.log("パー")
            $('.gu440').hide();
            $('.ch440').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite440 == 0 &&  count >= 4831 && count<= 4847 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite440 == 1 && count >= 4831 && count<= 4847 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite440 == 2 && count >= 4831 && count<= 4847 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite440 == 0 && count >= 4831 && count<= 4847 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite440 == 1 && count >= 4831 && count<= 4847 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite440 == 2 && count >= 4831 && count<= 4847 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite440 == 0 && count >= 4831 && count<= 4847 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite440 == 1 && count >= 4831 && count<= 4847 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite440 == 2 && count >= 4831 && count<= 4847 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite450 = Math.floor(Math.random() *3);
        console.log(aite450, "ランダムな手が出る");
        
        if(aite450 == 0){
            console.log("グー")
            $('.ch450').hide();
            $('.pa450').hide();
                
        }else if(aite450 == 1){
            console.log("チョキ")
            $('.gu450').hide();
            $('.pa450').hide();
        }else if(aite450 == 2){
            console.log("パー")
            $('.gu450').hide();
            $('.ch450').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite450 == 0 &&  count >= 4848 && count<= 4898 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite450 == 1 && count >= 4848 && count<= 4898 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite450 == 2 && count >= 4848 && count<= 4898 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite450 == 0 && count >= 4848 && count<= 4898 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite450 == 1 && count >= 4848 && count<= 4898 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite450 == 2 && count >= 4848 && count<= 4898 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite450 == 0 && count >= 4848 && count<= 4898 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite450 == 1 && count >= 4848 && count<= 4898 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite450 == 2 && count >= 4848 && count<= 4898 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        
        var aite460 = Math.floor(Math.random() *3);
        console.log(aite460, "ランダムな手が出る");
        
        if(aite460 == 0){
            console.log("グー")
            $('.ch460').hide();
            $('.pa460').hide();
                
        }else if(aite460 == 1){
            console.log("チョキ")
            $('.gu460').hide();
            $('.pa460').hide();
        }else if(aite460 == 2){
            console.log("パー")
            $('.gu460').hide();
            $('.ch460').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite460 == 0 &&  count >= 4936 && count<= 4986 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite460 == 1 && count >= 4936 && count<= 4986 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite460 == 2 && count >= 4936 && count<= 4986 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite460 == 0 && count >= 4936 && count<= 4986 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite460 == 1 && count >= 4936 && count<= 4986 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite460 == 2 && count >= 4936 && count<= 4986 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite460 == 0 && count >= 4936 && count<= 4986 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite460 == 1 && count >= 4936 && count<= 4986 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite460 == 2 && count >= 4936 && count<= 4986 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    








    var aite470 = Math.floor(Math.random() *3);
    console.log(aite470, "ランダムな手が出る");
    
    if(aite470 == 0){
        console.log("グー")
        $('.ch470').hide();
        $('.pa470').hide();
            
    }else if(aite470 == 1){
        console.log("チョキ")
        $('.gu470').hide();
        $('.pa470').hide();
    }else if(aite470 == 2){
        console.log("パー")
        $('.gu470').hide();
        $('.ch470').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite470 == 0 &&  count >= 5005 && count<= 5055
         && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite470 == 1 && count >= 5005 && count<= 5055
         && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite470 == 2 && count >= 5005 && count<= 5055
         && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite470 == 0 && count >= 5005 && count<= 5055 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite470 == 1 && count >= 5005 && count<= 5055 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite470 == 2 && count >= 5005 && count<= 5055 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite470 == 0 && count >= 5005 && count<= 5055 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite470 == 1 && count >= 5005 && count<= 5055 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite470 == 2 && count >= 5005 && count<= 5055 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite480 = Math.floor(Math.random() *3);
    console.log(aite480, "ランダムな手が出る");
    
    if(aite480 == 0){
        console.log("グー")
        $('.ch480').hide();
        $('.pa480').hide();
            
    }else if(aite480 == 1){
        console.log("チョキ")
        $('.gu480').hide();
        $('.pa480').hide();
    }else if(aite480 == 2){
        console.log("パー")
        $('.gu480').hide();
        $('.ch480').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite480 == 0 &&  count >= 5093 && count<= 5143 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite480 == 1 && count >= 5093 && count<= 5143 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite480 == 2 && count >= 5093 && count<= 5143 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite480 == 0 && count >= 5093 && count<= 5143 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite480 == 1 && count >= 5093 && count<= 5143 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite480 == 2 && count >= 5093 && count<= 5143 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite480 == 0 && count >= 5093 && count<= 5143 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite480 == 1 && count >= 5093 && count<= 5143 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite480 == 2 && count >= 5093 && count<= 5143 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite490 = Math.floor(Math.random() *3);
    console.log(aite490, "ランダムな手が出る");
    
    if(aite490 == 0){
        console.log("グー")
        $('.ch490').hide();
        $('.pa490').hide();
            
    }else if(aite490 == 1){
        console.log("チョキ")
        $('.gu490').hide();
        $('.pa490').hide();
    }else if(aite490 == 2){
        console.log("パー")
        $('.gu490').hide();
        $('.ch490').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite490 == 0 &&  count >= 5166 && count<= 5216 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite490 == 1 && count >= 5166 && count<= 5216 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite490 == 2 && count >= 5166 && count<= 5216 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite490 == 0 && count >= 5166 && count<= 5216 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite490 == 1 && count >= 5166 && count<= 5216 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite490 == 2 && count >= 5166 && count<= 5216 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite490 == 0 && count >= 5166 && count<= 5216 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite490 == 1 && count >= 5166 && count<= 5216 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite490 == 2 && count >= 5166 && count<= 5216 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite500 = Math.floor(Math.random() *3);
    console.log(aite500, "ランダムな手が出る");
    
    if(aite500 == 0){
        console.log("グー")
        $('.ch500').hide();
        $('.pa500').hide();
            
    }else if(aite500 == 1){
        console.log("チョキ")
        $('.gu500').hide();
        $('.pa500').hide();
    }else if(aite500 == 2){
        console.log("パー")
        $('.gu500').hide();
        $('.ch500').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite500 == 0 &&  count >= 5242 && count<= 5292 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite500 == 1 && count >= 5242 && count<= 5292 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite500 == 2 && count >= 5242 && count<= 5292 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite500 == 0 && count >= 5242 && count<= 5292 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite500 == 1 && count >= 5242 && count<= 5292 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite500 == 2 && count >= 5242 && count<= 5292 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite500 == 0 && count >= 5242 && count<= 5292 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite500 == 1 && count >= 5242 && count<= 5292 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite500 == 2 && count >= 5242 && count<= 5292 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite510 = Math.floor(Math.random() *3);
    console.log(aite510, "ランダムな手が出る");
    
    if(aite510 == 0){
        console.log("グー")
        $('.ch510').hide();
        $('.pa510').hide();
            
    }else if(aite510 == 1){
        console.log("チョキ")
        $('.gu510').hide();
        $('.pa510').hide();
    }else if(aite510 == 2){
        console.log("パー")
        $('.gu510').hide();
        $('.ch510').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite510 == 0 &&  count >= 5326 && count<= 5376 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite510 == 1 && count >= 5326 && count<= 5376 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite510 == 2 && count >= 5326 && count<= 5376 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite510 == 0 && count >= 5326 && count<= 5376 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite510 == 1 && count >= 5326 && count<= 5376 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite510 == 2 && count >= 5326 && count<= 5376 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite510 == 0 && count >= 5326 && count<= 5376 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite510 == 1 && count >= 5326 && count<= 5376 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite510 == 2 && count >= 5326 && count<= 5376 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite520 = Math.floor(Math.random() *3);
    console.log(aite520, "ランダムな手が出る");
    
    if(aite520 == 0){
        console.log("グー")
        $('.ch520').hide();
        $('.pa520').hide();
            
    }else if(aite520 == 1){
        console.log("チョキ")
        $('.gu520').hide();
        $('.pa520').hide();
    }else if(aite520 == 2){
        console.log("パー")
        $('.gu520').hide();
        $('.ch520').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite520 == 0 &&  count >= 5403 && count<= 5453 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite520 == 1 && count >= 5403 && count<= 5453 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite520 == 2 && count >= 5403 && count<= 5453 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite520 == 0 && count >= 5403 && count<= 5453 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite520 == 1 && count >= 5403 && count<= 5453 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite520 == 2 && count >= 5403 && count<= 5453 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite520 == 0 && count >= 5403 && count<= 5453 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite520 == 1 && count >= 5403 && count<= 5453 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite520 == 2 && count >= 5403 && count<= 5453 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite530 = Math.floor(Math.random() *3);
    console.log(aite530, "ランダムな手が出る");
    
    if(aite530 == 0){
        console.log("グー")
        $('.ch530').hide();
        $('.pa530').hide();
            
    }else if(aite530 == 1){
        console.log("チョキ")
        $('.gu530').hide();
        $('.pa530').hide();
    }else if(aite530 == 2){
        console.log("パー")
        $('.gu530').hide();
        $('.ch530').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite530 == 0 &&  count >= 5488 && count<= 5538 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite530 == 1 && count >= 5488 && count<= 5538 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite530 == 2 && count >= 5488 && count<= 5538 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite530 == 0 && count >= 5488 && count<= 5538 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite530 == 1 && count >= 5488 && count<= 5538 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite530 == 2 && count >= 5488 && count<= 5538 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite530 == 0 && count >= 5488 && count<= 5538 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite530 == 1 && count >= 5488 && count<= 5538 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite530 == 2 && count >= 5488 && count<= 5538 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });

    
    var aite540 = Math.floor(Math.random() *3);
    console.log(aite540, "ランダムな手が出る");
    
    if(aite540 == 0){
        console.log("グー")
        $('.ch540').hide();
        $('.pa540').hide();
            
    }else if(aite540 == 1){
        console.log("チョキ")
        $('.gu540').hide();
        $('.pa540').hide();
    }else if(aite540 == 2){
        console.log("パー")
        $('.gu540').hide();
        $('.ch540').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite540 == 0 &&  count >= 5573 && count<= 5623 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite540 == 1 && count >= 5573 && count<= 5623 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite540 == 2 && count >= 5573 && count<= 5623 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite540 == 0 && count >= 5573 && count<= 5623 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite540 == 1 && count >= 5573 && count<= 5623 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite540 == 2 && count >= 5573 && count<= 5623 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite540 == 0 && count >= 5573 && count<= 5623 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite540 == 1 && count >= 5573 && count<= 5623 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite540 == 2 && count >= 5573 && count<= 5623 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    var aite550 = Math.floor(Math.random() *3);
    console.log(aite550, "ランダムな手が出る");
    
    if(aite550 == 0){
        console.log("グー")
        $('.ch550').hide();
        $('.pa550').hide();
            
    }else if(aite550 == 1){
        console.log("チョキ")
        $('.gu550').hide();
        $('.pa550').hide();
    }else if(aite550 == 2){
        console.log("パー")
        $('.gu550').hide();
        $('.ch550').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite550 == 0 &&  count >= 5650 && count<= 5700 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite550 == 1 && count >= 5650 && count<= 5700 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite550 == 2 && count >= 5650 && count<= 5700 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite550 == 0 && count >= 5650 && count<= 5700 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite550 == 1 && count >= 5650 && count<= 5700 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite550 == 2 && count >= 5650 && count<= 5700 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite550 == 0 && count >= 5650 && count<= 5700 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite550 == 1 && count >= 5650 && count<= 5700 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite550 == 2 && count >= 5650 && count<= 5700 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });


    
    
    var aite560 = Math.floor(Math.random() *3);
    console.log(aite560, "ランダムな手が出る");
    
    if(aite560 == 0){
        console.log("グー")
        $('.ch560').hide();
        $('.pa560').hide();
            
    }else if(aite560 == 1){
        console.log("チョキ")
        $('.gu560').hide();
        $('.pa560').hide();
    }else if(aite560 == 2){
        console.log("パー")
        $('.gu560').hide();
        $('.ch560').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite560 == 0 &&  count >= 5725 && count<= 5775 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite560 == 1 && count >= 5725 && count<= 5775 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite560 == 2 && count >= 5725 && count<= 5775 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite560 == 0 && count >= 5725 && count<= 5775 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite560 == 1 && count >= 5725 && count<= 5775 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite560 == 2 && count >= 5725 && count<= 5775 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite560 == 0 && count >= 5725 && count<= 5775 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite560 == 1 && count >= 5725 && count<= 5775 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite560 == 2 && count >= 5725 && count<= 5775 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });


    var aite570 = Math.floor(Math.random() *3);
    console.log(aite570, "ランダムな手が出る");
    
    if(aite570 == 0){
        console.log("グー")
        $('.ch570').hide();
        $('.pa570').hide();
            
    }else if(aite570 == 1){
        console.log("チョキ")
        $('.gu570').hide();
        $('.pa570').hide();
    }else if(aite570 == 2){
        console.log("パー")
        $('.gu570').hide();
        $('.ch570').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite570 == 0 &&  count >= 5809 && count<= 5859 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite570 == 1 && count >= 5809 && count<= 5859 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite570 == 2 && count >= 5809 && count<= 5859 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
        if(aite570 == 0 && count >= 5809 && count<= 5859 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite570 == 1 && count >= 5809 && count<= 5859 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite570 == 2 && count >= 5809 && count<= 5859 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
    
        document.addEventListener('keydown', function(event) {
        if(aite570 == 0 && count >= 5809 && count<= 5859 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite570 == 1 && count >= 5809 && count<= 5859 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite570 == 2 && count >= 5809 && count<= 5859 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });


    

        var aite580 = Math.floor(Math.random() *3);
        console.log(aite580, "ランダムな手が出る");
        
        if(aite580 == 0){
            console.log("グー")
            $('.ch580').hide();
            $('.pa580').hide();
                
        }else if(aite580 == 1){
            console.log("チョキ")
            $('.gu580').hide();
            $('.pa580').hide();
        }else if(aite580 == 2){
            console.log("パー")
            $('.gu580').hide();
            $('.ch580').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite580 == 0 &&  count >= 5860 && count<= 5898 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite580 == 1 && count >= 5860 && count<= 5898 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite580 == 2 && count >= 5860 && count<= 5898 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite580 == 0 && count >= 5860 && count<= 5898 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite580 == 1 && count >= 5860 && count<= 5898 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite580 == 2 && count >= 5860 && count<= 5898 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite580 == 0 && count >= 5860 && count<= 5898 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite580 == 1 && count >= 5860 && count<= 5898 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite580 == 2 && count >= 5860 && count<= 5898 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
    
        var aite590 = Math.floor(Math.random() *3);
        console.log(aite590, "ランダムな手が出る");
        
        if(aite590 == 0){
            console.log("グー")
            $('.ch590').hide();
            $('.pa590').hide();
                
        }else if(aite590 == 1){
            console.log("チョキ")
            $('.gu590').hide();
            $('.pa590').hide();
        }else if(aite590 == 2){
            console.log("パー")
            $('.gu590').hide();
            $('.ch590').hide();
        }
        
        
        
        document.addEventListener('keydown', function(event) {
        if(aite590 == 0 &&  count >= 5899 && count<= 5939 && event.code == 'KeyG'){
            console.log('あいこ'); score += 100; getScore();
        }else if(aite590 == 1 && count >= 5899 && count<= 5939 && event.code == 'KeyG'){
            console.log('かち'); score += 200; getScore();
        }else if(aite590 == 2 && count >= 5899 && count<= 5939 && event.code == 'KeyG'){
            console.log('まけ'); score -= 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite590 == 0 && count >= 5899 && count<= 5939 && event.code == 'KeyT'){
                console.log('まけ'); score -= 200; getScore();
        }else if(aite590 == 1 && count >= 5899 && count<= 5939 && event.code == 'KeyT'){
                console.log('あいこ'); score += 100; getScore();
         }else if(aite590 == 2 && count >= 5899 && count<= 5939 && event.code == 'KeyT'){
                console.log('かち'); score += 200; getScore();
        }
        });
        
        document.addEventListener('keydown', function(event) {
        if(aite590 == 0 && count >= 5899 && count<= 5939 && event.code == 'KeyP'){
                    console.log('かち'); score += 200; getScore();
        }else if(aite590 == 1 && count >= 5899 && count<= 5939 && event.code == 'KeyP'){
                    console.log('まけ'); score -= 200; getScore();
        }else if(aite590 == 2 && count >= 5899 && count<= 5939 && event.code == 'KeyP'){
                    console.log('あいこ'); score += 100; getScore();
        }
        });
    
        var aite600 = Math.floor(Math.random() *3);
    console.log(aite600, "ランダムな手が出る");
    
    if(aite600 == 0){
        console.log("グー")
        $('.ch600').hide();
        $('.pa600').hide();
            
    }else if(aite600 == 1){
        console.log("チョキ")
        $('.gu600').hide();
        $('.pa600').hide();
    }else if(aite600 == 2){
        console.log("パー")
        $('.gu600').hide();
        $('.ch600').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite600 == 0 &&  count >= 5940 && count<= 5984 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite600 == 1 && count >= 5940 && count<= 5984 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite600 == 2 && count >= 5940 && count<= 5984 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite600 == 0 && count >= 5940 && count<= 5984 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite600 == 1 && count >= 5940 && count<= 5984 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite600 == 2 && count >= 5940 && count<= 5984 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite600 == 0 && count >= 5940 && count<= 5984 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite600 == 1 && count >= 5940 && count<= 5984 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite600 == 2 && count >= 5940 && count<= 5984 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });

    var aite610 = Math.floor(Math.random() *3);
    console.log(aite610, "ランダムな手が出る");
    
    if(aite610 == 0){
        console.log("グー")
        $('.ch610').hide();
        $('.pa610').hide();
            
    }else if(aite610 == 1){
        console.log("チョキ")
        $('.gu610').hide();
        $('.pa610').hide();
    }else if(aite610 == 2){
        console.log("パー")
        $('.gu610').hide();
        $('.ch610').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite610 == 0 &&  count >= 6005 && count<= 6055 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite610 == 1 && count >= 6005 && count<= 6055 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite610 == 2 && count >= 6005 && count<= 6055 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite610 == 0 && count >= 6005 && count<= 6055 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite610 == 1 && count >= 6005 && count<= 6055 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite610 == 2 && count >= 6005 && count<= 6055 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite610 == 0 && count >= 6005 && count<= 6055 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite610 == 1 && count >= 6005 && count<= 6055 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite610 == 2 && count >= 6005 && count<= 6055 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });


    var aite620 = Math.floor(Math.random() *3);
    console.log(aite620, "ランダムな手が出る");
    
    if(aite620 == 0){
        console.log("グー")
        $('.ch620').hide();
        $('.pa620').hide();
            
    }else if(aite620 == 1){
        console.log("チョキ")
        $('.gu620').hide();
        $('.pa620').hide();
    }else if(aite620 == 2){
        console.log("パー")
        $('.gu620').hide();
        $('.ch620').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite620 == 0 &&  count >= 6056 && count<= 6090 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite620 == 1 && count >= 6056 && count<= 6090 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite620 == 2 && count >= 6056 && count<= 6090 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite620 == 0 && count >= 6056 && count<= 6090 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite620 == 1 && count >= 6056 && count<= 6090 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite620 == 2 && count >= 6056 && count<= 6090 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite620 == 0 && count >= 6056 && count<= 6090 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite620 == 1 && count >= 6056 && count<= 6090 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite620 == 2 && count >= 6056 && count<= 6090 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });


    
    var aite630 = Math.floor(Math.random() *3);
    console.log(aite630, "ランダムな手が出る");
    
    if(aite630 == 0){
        console.log("グー")
        $('.ch630').hide();
        $('.pa630').hide();
            
    }else if(aite630 == 1){
        console.log("チョキ")
        $('.gu630').hide();
        $('.pa630').hide();
    }else if(aite630 == 2){
        console.log("パー")
        $('.gu630').hide();
        $('.ch630').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite630 == 0 &&  count >= 6091 && count<= 6111 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite630 == 1 && count >= 6091 && count<= 6111 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite630 == 2 && count >= 6091 && count<= 6111 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite630 == 0 && count >= 6091 && count<= 6111 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite630 == 1 && count >= 6091 && count<= 6111 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite630 == 2 && count >= 6091 && count<= 6111 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite630 == 0 && count >= 6091 && count<= 6111 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite630 == 1 && count >= 6091 && count<= 6111 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite630 == 2 && count >= 6091 && count<= 6111 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });


    var aite640 = Math.floor(Math.random() *3);
    console.log(aite640, "ランダムな手が出る");
    
    if(aite640 == 0){
        console.log("グー")
        $('.ch640').hide();
        $('.pa640').hide();
            
    }else if(aite640 == 1){
        console.log("チョキ")
        $('.gu640').hide();
        $('.pa640').hide();
    }else if(aite640 == 2){
        console.log("パー")
        $('.gu640').hide();
        $('.ch640').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite640 == 0 &&  count >= 6132 && count<= 6182 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite640 == 1 && count >= 6132 && count<= 6182 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite640 == 2 && count >= 6132 && count<= 6182 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite640 == 0 && count >= 6132 && count<= 6182 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite640 == 1 && count >= 6132 && count<= 6182 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite640 == 2 && count >= 6132 && count<= 6182 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite640 == 0 && count >= 6132 && count<= 6182 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite640 == 1 && count >= 6132 && count<= 6182 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite640 == 2 && count >= 6132 && count<= 6182 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });


    
    
    var aite650 = Math.floor(Math.random() *3);
    console.log(aite650, "ランダムな手が出る");
    
    if(aite650 == 0){
        console.log("グー")
        $('.ch650').hide();
        $('.pa650').hide();
            
    }else if(aite650 == 1){
        console.log("チョキ")
        $('.gu650').hide();
        $('.pa650').hide();
    }else if(aite650 == 2){
        console.log("パー")
        $('.gu650').hide();
        $('.ch650').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite650 == 0 &&  count >= 6212 && count<= 6262 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite650 == 1 && count >= 6212 && count<= 6262 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite650 == 2 && count >= 6212 && count<= 6262 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite650 == 0 && count >= 6212 && count<= 6262 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite650 == 1 && count >= 6212 && count<= 6262 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite650 == 2 && count >= 6212 && count<= 6262 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite650 == 0 && count >= 6212 && count<= 6262 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite650 == 1 && count >= 6212 && count<= 6262 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite650 == 2 && count >= 6212 && count<= 6262 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite660 = Math.floor(Math.random() *3);
    console.log(aite660, "ランダムな手が出る");
    
    if(aite660 == 0){
        console.log("グー")
        $('.ch660').hide();
        $('.pa660').hide();
            
    }else if(aite660 == 1){
        console.log("チョキ")
        $('.gu660').hide();
        $('.pa660').hide();
    }else if(aite660 == 2){
        console.log("パー")
        $('.gu660').hide();
        $('.ch660').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite660 == 0 &&  count >= 6301 && count<= 6351 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite660 == 1 && count >= 6301 && count<= 6351 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite660 == 2 && count >= 6301 && count<= 6351 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite660 == 0 && count >= 6301 && count<= 6351 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite660 == 1 && count >= 6301 && count<= 6351 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite660 == 2 && count >= 6301 && count<= 6351 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite660 == 0 && count >= 6301 && count<= 6351 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite660 == 1 && count >= 6301 && count<= 6351 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite660 == 2 && count >= 6301 && count<= 6351 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite670 = Math.floor(Math.random() *3);
    console.log(aite670, "ランダムな手が出る");
    
    if(aite670 == 0){
        console.log("グー")
        $('.ch670').hide();
        $('.pa670').hide();
            
    }else if(aite670 == 1){
        console.log("チョキ")
        $('.gu670').hide();
        $('.pa670').hide();
    }else if(aite670 == 2){
        console.log("パー")
        $('.gu670').hide();
        $('.ch670').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite670 == 0 &&  count >= 6377 && count<= 6427 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite670 == 1 && count >= 6377 && count<= 6427 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite670 == 2 && count >= 6377 && count<= 6427 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite670 == 0 && count >= 6377 && count<= 6427 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite670 == 1 && count >= 6377 && count<= 6427 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite670 == 2 && count >= 6377 && count<= 6427 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite670 == 0 && count >= 6377 && count<= 6427 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite670 == 1 && count >= 6377 && count<= 6427 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite670 == 2 && count >= 6377 && count<= 6427 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite680 = Math.floor(Math.random() *3);
    console.log(aite680, "ランダムな手が出る");
    
    if(aite680 == 0){
        console.log("グー")
        $('.ch680').hide();
        $('.pa680').hide();
            
    }else if(aite680 == 1){
        console.log("チョキ")
        $('.gu680').hide();
        $('.pa680').hide();
    }else if(aite680 == 2){
        console.log("パー")
        $('.gu680').hide();
        $('.ch680').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite680 == 0 &&  count >= 6455 && count<= 6505 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite680 == 1 && count >= 6455 && count<= 6505 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite680 == 2 && count >= 6455 && count<= 6505 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite680 == 0 && count >= 6455 && count<= 6505 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite680 == 1 && count >= 6455 && count<= 6505 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite680 == 2 && count >= 6455 && count<= 6505 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite680 == 0 && count >= 6455 && count<= 6505 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite680 == 1 && count >= 6455 && count<= 6505 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite680 == 2 && count >= 6455 && count<= 6505 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite690 = Math.floor(Math.random() *3);
    console.log(aite690, "ランダムな手が出る");
    
    if(aite690 == 0){
        console.log("グー")
        $('.ch690').hide();
        $('.pa690').hide();
            
    }else if(aite690 == 1){
        console.log("チョキ")
        $('.gu690').hide();
        $('.pa690').hide();
    }else if(aite690 == 2){
        console.log("パー")
        $('.gu690').hide();
        $('.ch690').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite690 == 0 &&  count >= 6544 && count<= 6594 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite690 == 1 && count >= 6544 && count<= 6594 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite690 == 2 && count >= 6544 && count<= 6594 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite690 == 0 && count >= 6544 && count<= 6594 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite690 == 1 && count >= 6544 && count<= 6594 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite690 == 2 && count >= 6544 && count<= 6594 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite690 == 0 && count >= 6544 && count<= 6594 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite690 == 1 && count >= 6544 && count<= 6594 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite690 == 2 && count >= 6544 && count<= 6594 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite700 = Math.floor(Math.random() *3);
    console.log(aite700, "ランダムな手が出る");
    
    if(aite700 == 0){
        console.log("グー")
        $('.ch700').hide();
        $('.pa700').hide();
            
    }else if(aite700 == 1){
        console.log("チョキ")
        $('.gu700').hide();
        $('.pa700').hide();
    }else if(aite700 == 2){
        console.log("パー")
        $('.gu700').hide();
        $('.ch700').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite700 == 0 &&  count >= 6617 && count<= 6667 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite700 == 1 && count >= 6617 && count<= 6667 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite700 == 2 && count >= 6617 && count<= 6667 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite700 == 0 && count >= 6617 && count<= 6667 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite700 == 1 && count >= 6617 && count<= 6667 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite700 == 2 && count >= 6617 && count<= 6667 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite700 == 0 && count >= 6617 && count<= 6667 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite700 == 1 && count >= 6617 && count<= 6667 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite700 == 2 && count >= 6617 && count<= 6667 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite710 = Math.floor(Math.random() *3);
    console.log(aite710, "ランダムな手が出る");
    
    if(aite710 == 0){
        console.log("グー")
        $('.ch710').hide();
        $('.pa710').hide();
            
    }else if(aite710 == 1){
        console.log("チョキ")
        $('.gu710').hide();
        $('.pa710').hide();
    }else if(aite710 == 2){
        console.log("パー")
        $('.gu710').hide();
        $('.ch710').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite710 == 0 &&  count >= 6693 && count<= 6743 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite710 == 1 && count >= 6693 && count<= 6743 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite710 == 2 && count >= 6693 && count<= 6743 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite710 == 0 && count >= 6693 && count<= 6743 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite710 == 1 && count >= 6693 && count<= 6743 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite710 == 2 && count >= 6693 && count<= 6743 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite710 == 0 && count >= 6693 && count<= 6743 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite710 == 1 && count >= 6693 && count<= 6743 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite710 == 2 && count >= 6693 && count<= 6743 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite720 = Math.floor(Math.random() *3);
    console.log(aite720, "ランダムな手が出る");
    
    if(aite720 == 0){
        console.log("グー")
        $('.ch720').hide();
        $('.pa720').hide();
            
    }else if(aite720 == 1){
        console.log("チョキ")
        $('.gu720').hide();
        $('.pa720').hide();
    }else if(aite720 == 2){
        console.log("パー")
        $('.gu720').hide();
        $('.ch720').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite720 == 0 &&  count >= 6813 && count<= 6863 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite720 == 1 && count >= 6813 && count<= 6863 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite720 == 2 && count >= 6813 && count<= 6863 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite720 == 0 && count >= 6813 && count<= 6863 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite720 == 1 && count >= 6813 && count<= 6863 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite720 == 2 && count >= 6813 && count<= 6863 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite720 == 0 && count >= 6813 && count<= 6863 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite720 == 1 && count >= 6813 && count<= 6863 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite720 == 2 && count >= 6813 && count<= 6863 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite730 = Math.floor(Math.random() *3);
    console.log(aite730, "ランダムな手が出る");
    
    if(aite730 == 0){
        console.log("グー")
        $('.ch730').hide();
        $('.pa730').hide();
            
    }else if(aite730 == 1){
        console.log("チョキ")
        $('.gu730').hide();
        $('.pa730').hide();
    }else if(aite730 == 2){
        console.log("パー")
        $('.gu730').hide();
        $('.ch730').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite730 == 0 &&  count >= 6889 && count<= 6939 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite730 == 1 && count >= 6889 && count<= 6939 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite730 == 2 && count >= 6889 && count<= 6939 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite730 == 0 && count >= 6889 && count<= 6939 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite730 == 1 && count >= 6889 && count<= 6939 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite730 == 2 && count >= 6889 && count<= 6939 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite730 == 0 && count >= 6889 && count<= 6939 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite730 == 1 && count >= 6889 && count<= 6939 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite730 == 2 && count >= 6889 && count<= 6939 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite740 = Math.floor(Math.random() *3);
    console.log(aite740, "ランダムな手が出る");
    
    if(aite740 == 0){
        console.log("グー")
        $('.ch740').hide();
        $('.pa740').hide();
            
    }else if(aite740 == 1){
        console.log("チョキ")
        $('.gu740').hide();
        $('.pa740').hide();
    }else if(aite740 == 2){
        console.log("パー")
        $('.gu740').hide();
        $('.ch740').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite740 == 0 &&  count >= 6940 && count<= 6985 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite740 == 1 && count >= 6940 && count<= 6985 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite740 == 2 && count >= 6940 && count<= 6985 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite740 == 0 && count >= 6940 && count<= 6985 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite740 == 1 && count >= 6940 && count<= 6985 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite740 == 2 && count >= 6940 && count<= 6985 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite740 == 0 && count >= 6940 && count<= 6985 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite740 == 1 && count >= 6940 && count<= 6985 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite740 == 2 && count >= 6940 && count<= 6985 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite750 = Math.floor(Math.random() *3);
    console.log(aite750, "ランダムな手が出る");
    
    if(aite750 == 0){
        console.log("グー")
        $('.ch750').hide();
        $('.pa750').hide();
            
    }else if(aite750 == 1){
        console.log("チョキ")
        $('.gu750').hide();
        $('.pa750').hide();
    }else if(aite750 == 2){
        console.log("パー")
        $('.gu750').hide();
        $('.ch750').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite750 == 0 &&  count >= 6986 && count<= 7027 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite750 == 1 && count >= 6986 && count<= 7027 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite750 == 2 && count >= 6986 && count<= 7027 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite750 == 0 && count >= 6986 && count<= 7027 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite750 == 1 && count >= 6986 && count<= 7027 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite750 == 2 && count >= 6986 && count<= 7027 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite750 == 0 && count >= 6986 && count<= 7027 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite750 == 1 && count >= 6986 && count<= 7027 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite750 == 2 && count >= 6986 && count<= 7027 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite760 = Math.floor(Math.random() *3);
    console.log(aite760, "ランダムな手が出る");
    
    if(aite760 == 0){
        console.log("グー")
        $('.ch760').hide();
        $('.pa760').hide();
            
    }else if(aite760 == 1){
        console.log("チョキ")
        $('.gu760').hide();
        $('.pa760').hide();
    }else if(aite760 == 2){
        console.log("パー")
        $('.gu760').hide();
        $('.ch760').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite760 == 0 &&  count >= 7028 && count<= 7072 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite760 == 1 && count >= 7028 && count<= 7072 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite760 == 2 && count >= 7028 && count<= 7072 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite760 == 0 && count >= 7028 && count<= 7072 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite760 == 1 && count >= 7028 && count<= 7072 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite760 == 2 && count >= 7028 && count<= 7072 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite760 == 0 && count >= 7028 && count<= 7072 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite760 == 1 && count >= 7028 && count<= 7072 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite760 == 2 && count >= 7028 && count<= 7072 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite770 = Math.floor(Math.random() *3);
    console.log(aite770, "ランダムな手が出る");
    
    if(aite770 == 0){
        console.log("グー")
        $('.ch770').hide();
        $('.pa770').hide();
            
    }else if(aite770 == 1){
        console.log("チョキ")
        $('.gu770').hide();
        $('.pa770').hide();
    }else if(aite770 == 2){
        console.log("パー")
        $('.gu770').hide();
        $('.ch770').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite770 == 0 &&  count >= 7073 && count<= 7114 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite770 == 1 && count >= 7073 && count<= 7114 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite770 == 2 && count >= 7073 && count<= 7114 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite770 == 0 && count >= 7073 && count<= 7114 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite770 == 1 && count >= 7073 && count<= 7114 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite770 == 2 && count >= 7073 && count<= 7114 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite770 == 0 && count >= 7073 && count<= 7114 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite770 == 1 && count >= 7073 && count<= 7114 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite770 == 2 && count >= 7073 && count<= 7114 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite780 = Math.floor(Math.random() *3);
    console.log(aite780, "ランダムな手が出る");
    
    if(aite780 == 0){
        console.log("グー")
        $('.ch780').hide();
        $('.pa780').hide();
            
    }else if(aite780 == 1){
        console.log("チョキ")
        $('.gu780').hide();
        $('.pa780').hide();
    }else if(aite780 == 2){
        console.log("パー")
        $('.gu780').hide();
        $('.ch780').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite780 == 0 &&  count >= 7115 && count<= 7154 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite780 == 1 && count >= 7115 && count<= 7154 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite780 == 2 && count >= 7115 && count<= 7154 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite780 == 0 && count >= 7115 && count<= 7154 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite780 == 1 && count >= 7115 && count<= 7154 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite780 == 2 && count >= 7115 && count<= 7154 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite780 == 0 && count >= 7115 && count<= 7154 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite780 == 1 && count >= 7115 && count<= 7154 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite780 == 2 && count >= 7115 && count<= 7154 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite790 = Math.floor(Math.random() *3);
    console.log(aite790, "ランダムな手が出る");
    
    if(aite790 == 0){
        console.log("グー")
        $('.ch790').hide();
        $('.pa790').hide();
            
    }else if(aite790 == 1){
        console.log("チョキ")
        $('.gu790').hide();
        $('.pa790').hide();
    }else if(aite790 == 2){
        console.log("パー")
        $('.gu790').hide();
        $('.ch790').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite790 == 0 &&  count >= 7155 && count<= 7197 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite790 == 1 && count >= 7155 && count<= 7197 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite790 == 2 && count >= 7155 && count<= 7197 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite790 == 0 && count >= 7155 && count<= 7197 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite790 == 1 && count >= 7155 && count<= 7197 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite790 == 2 && count >= 7155 && count<= 7197 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite790 == 0 && count >= 7155 && count<= 7197 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite790 == 1 && count >= 7155 && count<= 7197 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite790 == 2 && count >= 7155 && count<= 7197 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite800 = Math.floor(Math.random() *3);
    console.log(aite800, "ランダムな手が出る");
    
    if(aite800 == 0){
        console.log("グー")
        $('.ch800').hide();
        $('.pa800').hide();
            
    }else if(aite800 == 1){
        console.log("チョキ")
        $('.gu800').hide();
        $('.pa800').hide();
    }else if(aite800 == 2){
        console.log("パー")
        $('.gu800').hide();
        $('.ch800').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite800 == 0 &&  count >= 7198 && count<= 7235 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite800 == 1 && count >= 7198 && count<= 7235 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite800 == 2 && count >= 7198 && count<= 7235 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite800 == 0 && count >= 7198 && count<= 7235 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite800 == 1 && count >= 7198 && count<= 7235 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite800 == 2 && count >= 7198 && count<= 7235 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite800 == 0 && count >= 7198 && count<= 7235 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite800 == 1 && count >= 7198 && count<= 7235 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite800 == 2 && count >= 7198 && count<= 7235 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite810 = Math.floor(Math.random() *3);
    console.log(aite810, "ランダムな手が出る");
    
    if(aite810 == 0){
        console.log("グー")
        $('.ch810').hide();
        $('.pa810').hide();
            
    }else if(aite810 == 1){
        console.log("チョキ")
        $('.gu810').hide();
        $('.pa810').hide();
    }else if(aite810 == 2){
        console.log("パー")
        $('.gu810').hide();
        $('.ch810').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite810 == 0 &&  count >= 7236 && count<= 7274 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite810 == 1 && count >= 7236 && count<= 7274 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite810 == 2 && count >= 7236 && count<= 7274 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite810 == 0 && count >= 7236 && count<= 7274 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite810 == 1 && count >= 7236 && count<= 7274 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite810 == 2 && count >= 7236 && count<= 7274 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite810 == 0 && count >= 7236 && count<= 7274 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite810 == 1 && count >= 7236 && count<= 7274 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite810 == 2 && count >= 7236 && count<= 7274 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite820 = Math.floor(Math.random() *3);
    console.log(aite820, "ランダムな手が出る");
    
    if(aite820 == 0){
        console.log("グー")
        $('.ch820').hide();
        $('.pa820').hide();
            
    }else if(aite820 == 1){
        console.log("チョキ")
        $('.gu820').hide();
        $('.pa820').hide();
    }else if(aite820 == 2){
        console.log("パー")
        $('.gu820').hide();
        $('.ch820').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite820 == 0 &&  count >= 7275 && count<= 7314 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite820 == 1 && count >= 7275 && count<= 7314 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite820 == 2 && count >= 7275 && count<= 7314 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite820 == 0 && count >= 7275 && count<= 7314 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite820 == 1 && count >= 7275 && count<= 7314 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite820 == 2 && count >= 7275 && count<= 7314 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite820 == 0 && count >= 7275 && count<= 7314 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite820 == 1 && count >= 7275 && count<= 7314 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite820 == 2 && count >= 7275 && count<= 7314 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite830 = Math.floor(Math.random() *3);
    console.log(aite830, "ランダムな手が出る");
    
    if(aite830 == 0){
        console.log("グー")
        $('.ch830').hide();
        $('.pa830').hide();
            
    }else if(aite830 == 1){
        console.log("チョキ")
        $('.gu830').hide();
        $('.pa830').hide();
    }else if(aite830 == 2){
        console.log("パー")
        $('.gu830').hide();
        $('.ch830').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite830 == 0 &&  count >= 7326 && count<= 7376 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite830 == 1 && count >= 7326 && count<= 7376 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite830 == 2 && count >= 7326 && count<= 7376 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite830 == 0 && count >= 7326 && count<= 7376 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite830 == 1 && count >= 7326 && count<= 7376 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite830 == 2 && count >= 7326 && count<= 7376 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite830 == 0 && count >= 7326 && count<= 7376 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite830 == 1 && count >= 7326 && count<= 7376 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite830 == 2 && count >= 7326 && count<= 7376 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite840 = Math.floor(Math.random() *3);
    console.log(aite840, "ランダムな手が出る");
    
    if(aite840 == 0){
        console.log("グー")
        $('.ch840').hide();
        $('.pa840').hide();
            
    }else if(aite840 == 1){
        console.log("チョキ")
        $('.gu840').hide();
        $('.pa840').hide();
    }else if(aite840 == 2){
        console.log("パー")
        $('.gu840').hide();
        $('.ch840').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite840 == 0 &&  count >= 7377 && count<= 7401 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite840 == 1 && count >= 7376 && count<= 7401 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite840 == 2 && count >= 7376 && count<= 7401 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite840 == 0 && count >= 7376 && count<= 7401 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite840 == 1 && count >= 7376 && count<= 7401 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite840 == 2 && count >= 7376 && count<= 7401 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite840 == 0 && count >= 7376 && count<= 7401 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite840 == 1 && count >= 7376 && count<= 7401 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite840 == 2 && count >= 7376 && count<= 7401 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite850 = Math.floor(Math.random() *3);
    console.log(aite850, "ランダムな手が出る");
    
    if(aite850 == 0){
        console.log("グー")
        $('.ch850').hide();
        $('.pa850').hide();
            
    }else if(aite850 == 1){
        console.log("チョキ")
        $('.gu850').hide();
        $('.pa850').hide();
    }else if(aite850 == 2){
        console.log("パー")
        $('.gu850').hide();
        $('.ch850').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite850 == 0 &&  count >= 7418 && count<= 7468 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite850 == 1 && count >= 7418 && count<= 7468 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite850 == 2 && count >= 7418 && count<= 7468 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite850 == 0 && count >= 7418 && count<= 7468 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite850 == 1 && count >= 7418 && count<= 7468 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite850 == 2 && count >= 7418 && count<= 7468 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite850 == 0 && count >= 7418 && count<= 7468 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite850 == 1 && count >= 7418 && count<= 7468 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite850 == 2 && count >= 7418 && count<= 7468 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite860 = Math.floor(Math.random() *3);
    console.log(aite860, "ランダムな手が出る");
    
    if(aite860 == 0){
        console.log("グー")
        $('.ch860').hide();
        $('.pa860').hide();
            
    }else if(aite860 == 1){
        console.log("チョキ")
        $('.gu860').hide();
        $('.pa860').hide();
    }else if(aite860 == 2){
        console.log("パー")
        $('.gu860').hide();
        $('.ch860').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite860 == 0 &&  count >= 7503 && count<= 7553 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite860 == 1 && count >= 7503 && count<= 7553 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite860 == 2 && count >= 7503 && count<= 7553 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite860 == 0 && count >= 7503 && count<= 7553 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite860 == 1 && count >= 7503 && count<= 7553 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite860 == 2 && count >= 7503 && count<= 7553 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite860 == 0 && count >= 7503 && count<= 7553 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite860 == 1 && count >= 7503 && count<= 7553 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite860 == 2 && count >= 7503 && count<= 7553 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite870 = Math.floor(Math.random() *3);
    console.log(aite870, "ランダムな手が出る");
    
    if(aite870 == 0){
        console.log("グー")
        $('.ch870').hide();
        $('.pa870').hide();
            
    }else if(aite870 == 1){
        console.log("チョキ")
        $('.gu870').hide();
        $('.pa870').hide();
    }else if(aite870 == 2){
        console.log("パー")
        $('.gu870').hide();
        $('.ch870').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite870 == 0 &&  count >= 7586 && count<= 7636 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite870 == 1 && count >= 7586 && count<= 7636 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite870 == 2 && count >= 7586 && count<= 7636 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite870 == 0 && count >= 7586 && count<= 7636 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite870 == 1 && count >= 7586 && count<= 7636 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite870 == 2 && count >= 7586 && count<= 7636 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite870 == 0 && count >= 7586 && count<= 7636 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite870 == 1 && count >= 7586 && count<= 7636 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite870 == 2 && count >= 7586 && count<= 7636 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite880 = Math.floor(Math.random() *3);
    console.log(aite880, "ランダムな手が出る");
    
    if(aite880 == 0){
        console.log("グー")
        $('.ch880').hide();
        $('.pa880').hide();
            
    }else if(aite880 == 1){
        console.log("チョキ")
        $('.gu880').hide();
        $('.pa880').hide();
    }else if(aite880 == 2){
        console.log("パー")
        $('.gu880').hide();
        $('.ch880').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite880 == 0 &&  count >= 7665 && count<= 7715 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite880 == 1 && count >= 7665 && count<= 7715 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite880 == 2 && count >= 7665 && count<= 7715 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite880 == 0 && count >= 7665 && count<= 7715 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite880 == 1 && count >= 7665 && count<= 7715 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite880 == 2 && count >= 7665 && count<= 7715 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite880 == 0 && count >= 7665 && count<= 7715 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite880 == 1 && count >= 7665 && count<= 7715 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite880 == 2 && count >= 7665 && count<= 7715 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite890 = Math.floor(Math.random() *3);
    console.log(aite890, "ランダムな手が出る");
    
    if(aite890 == 0){
        console.log("グー")
        $('.ch890').hide();
        $('.pa890').hide();
            
    }else if(aite890 == 1){
        console.log("チョキ")
        $('.gu890').hide();
        $('.pa890').hide();
    }else if(aite890 == 2){
        console.log("パー")
        $('.gu890').hide();
        $('.ch890').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite890 == 0 &&  count >= 7751 && count<= 7801 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite890 == 1 && count >= 7751 && count<= 7801 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite890 == 2 && count >= 7751 && count<= 7801 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite890 == 0 && count >= 7751 && count<= 7801 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite890 == 1 && count >= 7751 && count<= 7801 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite890 == 2 && count >= 7751 && count<= 7801 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite890 == 0 && count >= 7751 && count<= 7801 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite890 == 1 && count >= 7751 && count<= 7801 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite890 == 2 && count >= 7751 && count<= 7801 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite900 = Math.floor(Math.random() *3);
    console.log(aite900, "ランダムな手が出る");
    
    if(aite900 == 0){
        console.log("グー")
        $('.ch900').hide();
        $('.pa900').hide();
            
    }else if(aite900 == 1){
        console.log("チョキ")
        $('.gu900').hide();
        $('.pa900').hide();
    }else if(aite900 == 2){
        console.log("パー")
        $('.gu900').hide();
        $('.ch900').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite900 == 0 &&  count >= 7829 && count<= 7879 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite900 == 1 && count >= 7829 && count<= 7879 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite900 == 2 && count >= 7829 && count<= 7879 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite900 == 0 && count >= 7829 && count<= 7879 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite900 == 1 && count >= 7829 && count<= 7879 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite900 == 2 && count >= 7829 && count<= 7879 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite900 == 0 && count >= 7829 && count<= 7879 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite900 == 1 && count >= 7829 && count<= 7879 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite900 == 2 && count >= 7829 && count<= 7879 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite910 = Math.floor(Math.random() *3);
    console.log(aite910, "ランダムな手が出る");
    
    if(aite910 == 0){
        console.log("グー")
        $('.ch910').hide();
        $('.pa910').hide();
            
    }else if(aite910 == 1){
        console.log("チョキ")
        $('.gu910').hide();
        $('.pa910').hide();
    }else if(aite910 == 2){
        console.log("パー")
        $('.gu910').hide();
        $('.ch910').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite910 == 0 &&  count >= 7913 && count<= 7963 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite910 == 1 && count >= 7913 && count<= 7963 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite910 == 2 && count >= 7913 && count<= 7963 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite910 == 0 && count >= 7913 && count<= 7963 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite910 == 1 && count >= 7913 && count<= 7963 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite910 == 2 && count >= 7913 && count<= 7963 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite910 == 0 && count >= 7913 && count<= 7963 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite910 == 1 && count >= 7913 && count<= 7963 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite910 == 2 && count >= 7913 && count<= 7963 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite920 = Math.floor(Math.random() *3);
    console.log(aite920, "ランダムな手が出る");
    
    if(aite920 == 0){
        console.log("グー")
        $('.ch920').hide();
        $('.pa920').hide();
            
    }else if(aite920 == 1){
        console.log("チョキ")
        $('.gu920').hide();
        $('.pa920').hide();
    }else if(aite920 == 2){
        console.log("パー")
        $('.gu920').hide();
        $('.ch920').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite920 == 0 &&  count >= 7964 && count<= 8035 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite920 == 1 && count >= 7964 && count<= 8035 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite920 == 2 && count >= 7964 && count<= 8035 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite920 == 0 && count >= 7964 && count<= 8035 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite920 == 1 && count >= 7964 && count<= 8035 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite920 == 2 && count >= 7964 && count<= 8035 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite920 == 0 && count >= 7964 && count<= 8035 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite920 == 1 && count >= 7964 && count<= 8035 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite920 == 2 && count >= 7964 && count<= 8035 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite930 = Math.floor(Math.random() *3);
    console.log(aite930, "ランダムな手が出る");
    
    if(aite930 == 0){
        console.log("グー")
        $('.ch930').hide();
        $('.pa930').hide();
            
    }else if(aite930 == 1){
        console.log("チョキ")
        $('.gu930').hide();
        $('.pa930').hide();
    }else if(aite930 == 2){
        console.log("パー")
        $('.gu930').hide();
        $('.ch930').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite930 == 0 &&  count >= 8062 && count<= 8112 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite930 == 1 && count >= 8062 && count<= 8112 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite930 == 2 && count >= 8062 && count<= 8112 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite930 == 0 && count >= 8062 && count<= 8112 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite930 == 1 && count >= 8062 && count<= 8112 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite930 == 2 && count >= 8062 && count<= 8112 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite930 == 0 && count >= 8062 && count<= 8112 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite930 == 1 && count >= 8062 && count<= 8112 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite930 == 2 && count >= 8062 && count<= 8112 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite940 = Math.floor(Math.random() *3);
    console.log(aite940, "ランダムな手が出る");
    
    if(aite940 == 0){
        console.log("グー")
        $('.ch940').hide();
        $('.pa940').hide();
            
    }else if(aite940 == 1){
        console.log("チョキ")
        $('.gu940').hide();
        $('.pa940').hide();
    }else if(aite940 == 2){
        console.log("パー")
        $('.gu940').hide();
        $('.ch940').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite940 == 0 &&  count >= 8136 && count<= 8186 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite940 == 1 && count >= 8136 && count<= 8186 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite940 == 2 && count >= 8136 && count<= 8186 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite940 == 0 && count >= 8136 && count<= 8186 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite940 == 1 && count >= 8136 && count<= 8186 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite940 == 2 && count >= 8136 && count<= 8186 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite940 == 0 && count >= 8136 && count<= 8186 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite940 == 1 && count >= 8136 && count<= 8186 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite940 == 2 && count >= 8136 && count<= 8186 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite950 = Math.floor(Math.random() *3);
    console.log(aite950, "ランダムな手が出る");
    
    if(aite950 == 0){
        console.log("グー")
        $('.ch950').hide();
        $('.pa950').hide();
            
    }else if(aite950 == 1){
        console.log("チョキ")
        $('.gu950').hide();
        $('.pa950').hide();
    }else if(aite950 == 2){
        console.log("パー")
        $('.gu950').hide();
        $('.ch950').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite950 == 0 &&  count >= 8191 && count<= 8241 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite950 == 1 && count >= 8191 && count<= 8241 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite950 == 2 && count >= 8191 && count<= 8241 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite950 == 0 && count >= 8191 && count<= 8241 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite950 == 1 && count >= 8191 && count<= 8241 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite950 == 2 && count >= 8191 && count<= 8241 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite950 == 0 && count >= 8191 && count<= 8241 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite950 == 1 && count >= 8191 && count<= 8241 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite950 == 2 && count >= 8191 && count<= 8241 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite960 = Math.floor(Math.random() *3);
    console.log(aite960, "ランダムな手が出る");
    
    if(aite960 == 0){
        console.log("グー")
        $('.ch960').hide();
        $('.pa960').hide();
            
    }else if(aite960 == 1){
        console.log("チョキ")
        $('.gu960').hide();
        $('.pa960').hide();
    }else if(aite960 == 2){
        console.log("パー")
        $('.gu960').hide();
        $('.ch960').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite960 == 0 &&  count >= 8242 && count<= 8286 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite960 == 1 && count >= 8242 && count<= 8286 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite960 == 2 && count >= 8242 && count<= 8286 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite960 == 0 && count >= 8242 && count<= 8286 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite960 == 1 && count >= 8242 && count<= 8286 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite960 == 2 && count >= 8242 && count<= 8286 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite960 == 0 && count >= 8242 && count<= 8286 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite960 == 1 && count >= 8242 && count<= 8286 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite960 == 2 && count >= 8242 && count<= 8286 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite970 = Math.floor(Math.random() *3);
    console.log(aite970, "ランダムな手が出る");
    
    if(aite970 == 0){
        console.log("グー")
        $('.ch970').hide();
        $('.pa970').hide();
            
    }else if(aite970 == 1){
        console.log("チョキ")
        $('.gu970').hide();
        $('.pa970').hide();
    }else if(aite970 == 2){
        console.log("パー")
        $('.gu970').hide();
        $('.ch970').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite970 == 0 &&  count >= 8287 && count<= 8324 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite970 == 1 && count >= 8287 && count<= 8324 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite970 == 2 && count >= 8287 && count<= 8324 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite970 == 0 && count >= 8287 && count<= 8324 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite970 == 1 && count >= 8287 && count<= 8324 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite970 == 2 && count >= 8287 && count<= 8324 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite970 == 0 && count >= 8287 && count<= 8324 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite970 == 1 && count >= 8287 && count<= 8324 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite970 == 2 && count >= 8287 && count<= 8324 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite980 = Math.floor(Math.random() *3);
    console.log(aite980, "ランダムな手が出る");
    
    if(aite980 == 0){
        console.log("グー")
        $('.ch980').hide();
        $('.pa980').hide();
            
    }else if(aite980 == 1){
        console.log("チョキ")
        $('.gu980').hide();
        $('.pa980').hide();
    }else if(aite980 == 2){
        console.log("パー")
        $('.gu980').hide();
        $('.ch980').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite980 == 0 &&  count >= 8325 && count<= 8363 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite980 == 1 && count >= 8325 && count<= 8363 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite980 == 2 && count >= 8325 && count<= 8363 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite980 == 0 && count >= 8325 && count<= 8363 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite980 == 1 && count >= 8325 && count<= 8363 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite980 == 2 && count >= 8325 && count<= 8363 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite980 == 0 && count >= 8325 && count<= 8363 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite980 == 1 && count >= 8325 && count<= 8363 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite980 == 2 && count >= 8325 && count<= 8363 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite990 = Math.floor(Math.random() *3);
    console.log(aite990, "ランダムな手が出る");
    
    if(aite990 == 0){
        console.log("グー")
        $('.ch990').hide();
        $('.pa990').hide();
            
    }else if(aite990 == 1){
        console.log("チョキ")
        $('.gu990').hide();
        $('.pa990').hide();
    }else if(aite990 == 2){
        console.log("パー")
        $('.gu990').hide();
        $('.ch990').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite990 == 0 &&  count >= 8364 && count<= 8402 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite990 == 1 && count >= 8364 && count<= 8402 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite990 == 2 && count >= 8364 && count<= 8402 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite990 == 0 && count >= 8364 && count<= 8402 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite990 == 1 && count >= 8364 && count<= 8402 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite990 == 2 && count >= 8364 && count<= 8402 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite990 == 0 && count >= 8364 && count<= 8402 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite990 == 1 && count >= 8364 && count<= 8402 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite990 == 2 && count >= 8364 && count<= 8402 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1000 = Math.floor(Math.random() *3);
    console.log(aite1000, "ランダムな手が出る");
    
    if(aite1000 == 0){
        console.log("グー")
        $('.ch1000').hide();
        $('.pa1000').hide();
            
    }else if(aite1000 == 1){
        console.log("チョキ")
        $('.gu1000').hide();
        $('.pa1000').hide();
    }else if(aite1000 == 2){
        console.log("パー")
        $('.gu1000').hide();
        $('.ch1000').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1000 == 0 &&  count >= 8403 && count<= 8447 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1000 == 1 && count >= 8403 && count<= 8447 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1000 == 2 && count >= 8403 && count<= 8447 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1000 == 0 && count >= 8403 && count<= 8447 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1000 == 1 && count >= 8403 && count<= 8447 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1000 == 2 && count >= 8403 && count<= 8447 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1000 == 0 && count >= 8403 && count<= 8447 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1000 == 1 && count >= 8403 && count<= 8447 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1000 == 2 && count >= 8403 && count<= 8447 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1010 = Math.floor(Math.random() *3);
    console.log(aite1010, "ランダムな手が出る");
    
    if(aite1010 == 0){
        console.log("グー")
        $('.ch1010').hide();
        $('.pa1010').hide();
            
    }else if(aite1010 == 1){
        console.log("チョキ")
        $('.gu1010').hide();
        $('.pa1010').hide();
    }else if(aite1010 == 2){
        console.log("パー")
        $('.gu1010').hide();
        $('.ch1010').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1010 == 0 &&  count >= 8448 && count<= 8484 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1010 == 1 && count >= 8448 && count<= 8484 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1010 == 2 && count >= 8448 && count<= 8484 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1010 == 0 && count >= 8448 && count<= 8484 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1010 == 1 && count >= 8448 && count<= 8484 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1010 == 2 && count >= 8448 && count<= 8484 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1010 == 0 && count >= 8448 && count<= 8484 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1010 == 1 && count >= 8448 && count<= 8484 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1010 == 2 && count >= 8448 && count<= 8484 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1020 = Math.floor(Math.random() *3);
    console.log(aite1020, "ランダムな手が出る");
    
    if(aite1020 == 0){
        console.log("グー")
        $('.ch1020').hide();
        $('.pa1020').hide();
            
    }else if(aite1020 == 1){
        console.log("チョキ")
        $('.gu1020').hide();
        $('.pa1020').hide();
    }else if(aite1020 == 2){
        console.log("パー")
        $('.gu1020').hide();
        $('.ch1020').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1020 == 0 &&  count >= 8485 && count<= 8525 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1020 == 1 && count >= 8485 && count<= 8525 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1020 == 2 && count >= 8485 && count<= 8525 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1020 == 0 && count >= 8485 && count<= 8525 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1020 == 1 && count >= 8485 && count<= 8525 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1020 == 2 && count >= 8485 && count<= 8525 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1020 == 0 && count >= 8485 && count<= 8525 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1020 == 1 && count >= 8485 && count<= 8525 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1020 == 2 && count >= 8485 && count<= 8525 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1030 = Math.floor(Math.random() *3);
    console.log(aite1030, "ランダムな手が出る");
    
    if(aite1030 == 0){
        console.log("グー")
        $('.ch1030').hide();
        $('.pa1030').hide();
            
    }else if(aite1030 == 1){
        console.log("チョキ")
        $('.gu1030').hide();
        $('.pa1030').hide();
    }else if(aite1030 == 2){
        console.log("パー")
        $('.gu1030').hide();
        $('.ch1030').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1030 == 0 &&  count >= 8526 && count<= 8561 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1030 == 1 && count >= 8526 && count<= 8561 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1030 == 2 && count >= 8526 && count<= 8561 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1030 == 0 && count >= 8526 && count<= 8561 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1030 == 1 && count >= 8526 && count<= 8561 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1030 == 2 && count >= 8526 && count<= 8561 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1030 == 0 && count >= 8526 && count<= 8561 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1030 == 1 && count >= 8526 && count<= 8561 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1030 == 2 && count >= 8526 && count<= 8561 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1040 = Math.floor(Math.random() *3);
    console.log(aite1040, "ランダムな手が出る");
    
    if(aite1040 == 0){
        console.log("グー")
        $('.ch1040').hide();
        $('.pa1040').hide();
            
    }else if(aite1040 == 1){
        console.log("チョキ")
        $('.gu1040').hide();
        $('.pa1040').hide();
    }else if(aite1040 == 2){
        console.log("パー")
        $('.gu1040').hide();
        $('.ch1040').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1040 == 0 &&  count >= 8562 && count<= 8605 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1040 == 1 && count >= 8562 && count<= 8605 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1040 == 2 && count >= 8562 && count<= 8605 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1040 == 0 && count >= 8562 && count<= 8605 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1040 == 1 && count >= 8562 && count<= 8605 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1040 == 2 && count >= 8562 && count<= 8605 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1040 == 0 && count >= 8562 && count<= 8605 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1040 == 1 && count >= 8562 && count<= 8605 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1040 == 2 && count >= 8562 && count<= 8605 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1050 = Math.floor(Math.random() *3);
    console.log(aite1050, "ランダムな手が出る");
    
    if(aite1050 == 0){
        console.log("グー")
        $('.ch1050').hide();
        $('.pa1050').hide();
            
    }else if(aite1050 == 1){
        console.log("チョキ")
        $('.gu1050').hide();
        $('.pa1050').hide();
    }else if(aite1050 == 2){
        console.log("パー")
        $('.gu1050').hide();
        $('.ch1050').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1050 == 0 &&  count >= 8608 && count<= 8658 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1050 == 1 && count >= 8608 && count<= 8658 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1050 == 2 && count >= 8608 && count<= 8658 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1050 == 0 && count >= 8608 && count<= 8658 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1050 == 1 && count >= 8608 && count<= 8658 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1050 == 2 && count >= 8608 && count<= 686580 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1050 == 0 && count >= 8608 && count<= 8658 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1050 == 1 && count >= 8608 && count<= 8658 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1050 == 2 && count >= 8608 && count<= 8658 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1060 = Math.floor(Math.random() *3);
    console.log(aite1060, "ランダムな手が出る");
    
    if(aite1060 == 0){
        console.log("グー")
        $('.ch1060').hide();
        $('.pa1060').hide();
            
    }else if(aite1060 == 1){
        console.log("チョキ")
        $('.gu1060').hide();
        $('.pa1060').hide();
    }else if(aite1060 == 2){
        console.log("パー")
        $('.gu1060').hide();
        $('.ch1060').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1060 == 0 &&  count >= 8659 && count<= 8678 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1060 == 1 && count >= 8659 && count<= 8678 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1060 == 2 && count >= 8659 && count<= 8678 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1060 == 0 && count >= 8659 && count<= 8678 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1060 == 1 && count >= 8659 && count<= 8678 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1060 == 2 && count >= 8659 && count<= 8678 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1060 == 0 && count >= 8659 && count<= 8678 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1060 == 1 && count >= 8659 && count<= 8678 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1060 == 2 && count >= 8659 && count<= 8678 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1070 = Math.floor(Math.random() *3);
    console.log(aite1070, "ランダムな手が出る");
    
    if(aite1070 == 0){
        console.log("グー")
        $('.ch1070').hide();
        $('.pa1070').hide();
            
    }else if(aite1070 == 1){
        console.log("チョキ")
        $('.gu1070').hide();
        $('.pa1070').hide();
    }else if(aite1070 == 2){
        console.log("パー")
        $('.gu1070').hide();
        $('.ch1070').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1070 == 0 &&  count >= 8709 && count<= 8759 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1070 == 1 && count >= 8709 && count<= 8759 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1070 == 2 && count >= 8709 && count<= 8759 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1070 == 0 && count >= 8709 && count<= 8759 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1070 == 1 && count >= 8709 && count<= 8759 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1070 == 2 && count >= 8709 && count<= 8759 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1070 == 0 && count >= 8709 && count<= 8759 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1070 == 1 && count >= 8709 && count<= 8759 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1070 == 2 && count >= 8709 && count<= 8759 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1080 = Math.floor(Math.random() *3);
    console.log(aite1080, "ランダムな手が出る");
    
    if(aite1080 == 0){
        console.log("グー")
        $('.ch1080').hide();
        $('.pa1080').hide();
            
    }else if(aite1080 == 1){
        console.log("チョキ")
        $('.gu1080').hide();
        $('.pa1080').hide();
    }else if(aite1080 == 2){
        console.log("パー")
        $('.gu1080').hide();
        $('.ch1080').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1080 == 0 &&  count >= 8791 && count<= 8841 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1080 == 1 && count >= 8791 && count<= 8841 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1080 == 2 && count >= 8791 && count<= 8841 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1080 == 0 && count >= 8791 && count<= 8841 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1080 == 1 && count >= 8791 && count<= 8841 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1080 == 2 && count >= 8791 && count<= 8841 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1080 == 0 && count >= 8791 && count<= 8841 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1080 == 1 && count >= 8791 && count<= 8841 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1080 == 2 && count >= 8791 && count<= 8841 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1090 = Math.floor(Math.random() *3);
    console.log(aite1090, "ランダムな手が出る");
    
    if(aite1090 == 0){
        console.log("グー")
        $('.ch1090').hide();
        $('.pa1090').hide();
            
    }else if(aite1090 == 1){
        console.log("チョキ")
        $('.gu1090').hide();
        $('.pa1090').hide();
    }else if(aite1090 == 2){
        console.log("パー")
        $('.gu1090').hide();
        $('.ch1090').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1090 == 0 &&  count >= 8874 && count<= 8924 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1090 == 1 && count >= 8874 && count<= 8924 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1090 == 2 && count >= 8874 && count<= 8924 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1090 == 0 && count >= 8874 && count<= 8924 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1090 == 1 && count >= 8874 && count<= 8924 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1090 == 2 && count >= 8874 && count<= 8924 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1090 == 0 && count >= 8874 && count<= 8924 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1090 == 1 && count >= 8874 && count<= 8924 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1090 == 2 && count >= 8874 && count<= 8924 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1100 = Math.floor(Math.random() *3);
    console.log(aite1100, "ランダムな手が出る");
    
    if(aite1100 == 0){
        console.log("グー")
        $('.ch1100').hide();
        $('.pa1100').hide();
            
    }else if(aite1100 == 1){
        console.log("チョキ")
        $('.gu1100').hide();
        $('.pa1100').hide();
    }else if(aite1100 == 2){
        console.log("パー")
        $('.gu1100').hide();
        $('.ch1100').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1100 == 0 &&  count >= 9037 && count<= 9087 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1100 == 1 && count >= 9037 && count<= 9087 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1100 == 2 && count >= 9037 && count<= 9087 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1100 == 0 && count >= 9037 && count<= 9087 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1100 == 1 && count >= 9037 && count<= 9087 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1100 == 2 && count >= 9037 && count<= 9087 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1100 == 0 && count >= 9037 && count<= 9087 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1100 == 1 && count >= 9037 && count<= 9087 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1100 == 2 && count >= 9037 && count<= 9087 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1110 = Math.floor(Math.random() *3);
    console.log(aite1110, "ランダムな手が出る");
    
    if(aite1110 == 0){
        console.log("グー")
        $('.ch1110').hide();
        $('.pa1110').hide();
            
    }else if(aite1110 == 1){
        console.log("チョキ")
        $('.gu1110').hide();
        $('.pa1110').hide();
    }else if(aite1110 == 2){
        console.log("パー")
        $('.gu1110').hide();
        $('.ch1110').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1110 == 0 &&  count >= 9195 && count<= 9245 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1110 == 1 && count >= 9195 && count<= 9245 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1110 == 2 && count >= 9195 && count<= 9245 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1110 == 0 && count >= 9195 && count<= 9245 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1110 == 1 && count >= 9195 && count<= 9245 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1110 == 2 && count >= 9195 && count<= 9245 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1110 == 0 && count >= 9195 && count<= 9245 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1110 == 1 && count >= 9195 && count<= 9245 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1110 == 2 && count >= 9195 && count<= 9245 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1120 = Math.floor(Math.random() *3);
    console.log(aite1120, "ランダムな手が出る");
    
    if(aite1120 == 0){
        console.log("グー")
        $('.ch1120').hide();
        $('.pa1120').hide();
            
    }else if(aite1120 == 1){
        console.log("チョキ")
        $('.gu1120').hide();
        $('.pa1120').hide();
    }else if(aite1120 == 2){
        console.log("パー")
        $('.gu1120').hide();
        $('.ch1120').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1120 == 0 &&  count >= 9360 && count<= 9410 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1120 == 1 && count >= 9360 && count<= 9410 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1120 == 2 && count >= 9360 && count<= 9410 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1120 == 0 && count >= 9360 && count<= 9410 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1120 == 1 && count >= 9360 && count<= 9410 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1120 == 2 && count >= 9360 && count<= 9410 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1120 == 0 && count >= 9360 && count<= 9410 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1120 == 1 && count >= 9360 && count<= 9410 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1120 == 2 && count >= 9360 && count<= 9410 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1130 = Math.floor(Math.random() *3);
    console.log(aite1130, "ランダムな手が出る");
    
    if(aite1130 == 0){
        console.log("グー")
        $('.ch1130').hide();
        $('.pa1130').hide();
            
    }else if(aite1130 == 1){
        console.log("チョキ")
        $('.gu1130').hide();
        $('.pa1130').hide();
    }else if(aite1130 == 2){
        console.log("パー")
        $('.gu1130').hide();
        $('.ch1130').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1130 == 0 &&  count >= 9433 && count<= 9483 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1130 == 1 && count >= 9433 && count<= 9483 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1130 == 2 && count >= 9433 && count<= 9483 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1130 == 0 && count >= 9433 && count<= 9483 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1130 == 1 && count >= 9433 && count<= 9483 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1130 == 2 && count >= 9433 && count<= 9483 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1130 == 0 && count >= 9433 && count<= 9483 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1130 == 1 && count >= 9433 && count<= 9483 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1130 == 2 && count >= 9433 && count<= 9483 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1140 = Math.floor(Math.random() *3);
    console.log(aite1140, "ランダムな手が出る");
    
    if(aite1140 == 0){
        console.log("グー")
        $('.ch1140').hide();
        $('.pa1140').hide();
            
    }else if(aite1140 == 1){
        console.log("チョキ")
        $('.gu1140').hide();
        $('.pa1140').hide();
    }else if(aite1140 == 2){
        console.log("パー")
        $('.gu1140').hide();
        $('.ch1140').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1140 == 0 &&  count >= 9514 && count<= 9564 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1140 == 1 && count >= 9514 && count<= 9564 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1140 == 2 && count >= 9514 && count<= 9564 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1140 == 0 && count >= 9514 && count<= 9564 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1140 == 1 && count >= 9514 && count<= 9564 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1140 == 2 && count >= 9514 && count<= 9564 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1140 == 0 && count >= 9514 && count<= 9564 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1140 == 1 && count >= 9514 && count<= 9564 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1140 == 2 && count >= 9514 && count<= 9564 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1150 = Math.floor(Math.random() *3);
    console.log(aite1150, "ランダムな手が出る");
    
    if(aite1150 == 0){
        console.log("グー")
        $('.ch1150').hide();
        $('.pa1150').hide();
            
    }else if(aite1150 == 1){
        console.log("チョキ")
        $('.gu1150').hide();
        $('.pa1150').hide();
    }else if(aite1150 == 2){
        console.log("パー")
        $('.gu1150').hide();
        $('.ch1150').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1150 == 0 &&  count >= 9597 && count<= 9647 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1150 == 1 && count >= 9597 && count<= 9647 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1150 == 2 && count >= 9597 && count<= 9647 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1150 == 0 && count >= 9597 && count<= 9647 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1150 == 1 && count >= 9597 && count<= 9647 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1150 == 2 && count >= 9597 && count<= 9647 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1150 == 0 && count >= 9597 && count<= 9647 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1150 == 1 && count >= 9597 && count<= 9647 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1150 == 2 && count >= 9597 && count<= 9647 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1160 = Math.floor(Math.random() *3);
    console.log(aite1160, "ランダムな手が出る");
    
    if(aite1160 == 0){
        console.log("グー")
        $('.ch1160').hide();
        $('.pa1160').hide();
            
    }else if(aite1160 == 1){
        console.log("チョキ")
        $('.gu1160').hide();
        $('.pa1160').hide();
    }else if(aite1160 == 2){
        console.log("パー")
        $('.gu1160').hide();
        $('.ch1160').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1160 == 0 &&  count >= 9684 && count<= 9734 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1160 == 1 && count >= 9684 && count<= 9734 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1160 == 2 && count >= 9684 && count<= 9734 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1160 == 0 && count >= 9684 && count<= 9734 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1160 == 1 && count >= 9684 && count<= 9734 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1160 == 2 && count >= 9684 && count<= 9734 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1160 == 0 && count >= 9684 && count<= 9734 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1160 == 1 && count >= 9684 && count<= 9734 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1160 == 2 && count >= 9684 && count<= 9734 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1170 = Math.floor(Math.random() *3);
    console.log(aite1170, "ランダムな手が出る");
    
    if(aite1170 == 0){
        console.log("グー")
        $('.ch1170').hide();
        $('.pa1170').hide();
            
    }else if(aite1170 == 1){
        console.log("チョキ")
        $('.gu1170').hide();
        $('.pa1170').hide();
    }else if(aite1170 == 2){
        console.log("パー")
        $('.gu1170').hide();
        $('.ch1170').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1170 == 0 &&  count >= 9761 && count<= 9811 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1170 == 1 && count >= 9761 && count<= 9811 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1170 == 2 && count >= 9761 && count<= 9811 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1170 == 0 && count >= 9761 && count<= 9811 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1170 == 1 && count >= 9761 && count<= 9811 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1170 == 2 && count >= 9761 && count<= 9811 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1170 == 0 && count >= 9761 && count<= 9811 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1170 == 1 && count >= 9761 && count<= 9811 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1170 == 2 && count >= 9761 && count<= 9811 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1180 = Math.floor(Math.random() *3);
    console.log(aite1180, "ランダムな手が出る");
    
    if(aite1180 == 0){
        console.log("グー")
        $('.ch1180').hide();
        $('.pa1180').hide();
            
    }else if(aite1180 == 1){
        console.log("チョキ")
        $('.gu1180').hide();
        $('.pa1180').hide();
    }else if(aite1180 == 2){
        console.log("パー")
        $('.gu1180').hide();
        $('.ch1180').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1180 == 0 &&  count >= 9845 && count<= 9895 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1180 == 1 && count >= 9845 && count<= 9895 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1180 == 2 && count >= 9845 && count<= 9895 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1180 == 0 && count >= 9845 && count<= 9895 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1180 == 1 && count >= 9845 && count<= 9895 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1180 == 2 && count >= 9845 && count<= 9895 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1180 == 0 && count >= 9845 && count<= 9895 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1180 == 1 && count >= 9845 && count<= 9895 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1180 == 2 && count >= 9845 && count<= 9895 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1190 = Math.floor(Math.random() *3);
    console.log(aite1190, "ランダムな手が出る");
    
    if(aite1190 == 0){
        console.log("グー")
        $('.ch1190').hide();
        $('.pa1190').hide();
            
    }else if(aite1190 == 1){
        console.log("チョキ")
        $('.gu1190').hide();
        $('.pa1190').hide();
    }else if(aite1190 == 2){
        console.log("パー")
        $('.gu1190').hide();
        $('.ch1190').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1190 == 0 &&  count >= 9925 && count<= 9975 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1190 == 1 && count >= 9925 && count<= 9975 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1190 == 2 && count >= 9925 && count<= 9975 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1190 == 0 && count >= 9925 && count<= 9975 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1190 == 1 && count >= 9925 && count<= 9975 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1190 == 2 && count >= 9925 && count<= 9975 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1190 == 0 && count >= 9925 && count<= 9975 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1190 == 1 && count >= 9925 && count<= 9975 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1190 == 2 && count >= 9925 && count<= 9975 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1200 = Math.floor(Math.random() *3);
    console.log(aite1200, "ランダムな手が出る");
    
    if(aite1200 == 0){
        console.log("グー")
        $('.ch1200').hide();
        $('.pa1200').hide();
            
    }else if(aite1200 == 1){
        console.log("チョキ")
        $('.gu1200').hide();
        $('.pa1200').hide();
    }else if(aite1200 == 2){
        console.log("パー")
        $('.gu1200').hide();
        $('.ch1200').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1200 == 0 &&  count >= 10006 && count<= 10056 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1200 == 1 && count >= 10006 && count<= 10056 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1200 == 2 && count >= 10006 && count<= 10056 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1200 == 0 && count >= 10006 && count<= 10056 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1200 == 1 && count >= 10006 && count<= 10056 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1200 == 2 && count >= 10006 && count<= 10056 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1200 == 0 && count >= 10006 && count<= 10056 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1200 == 1 && count >= 10006 && count<= 10056 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1200 == 2 && count >= 10006 && count<= 10056 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1210 = Math.floor(Math.random() *3);
    console.log(aite1210, "ランダムな手が出る");
    
    if(aite1210 == 0){
        console.log("グー")
        $('.ch1210').hide();
        $('.pa1210').hide();
            
    }else if(aite1210 == 1){
        console.log("チョキ")
        $('.gu1210').hide();
        $('.pa1210').hide();
    }else if(aite1210 == 2){
        console.log("パー")
        $('.gu1210').hide();
        $('.ch1210').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1210 == 0 &&  count >= 10082 && count<= 10132 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1210 == 1 && count >= 10082 && count<= 10132 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1210 == 2 && count >= 10082 && count<= 10132 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1210 == 0 && count >= 10082 && count<= 10132 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1210 == 1 && count >= 10082 && count<= 10132 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1210 == 2 && count >= 10082 && count<= 10132 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1210 == 0 && count >= 10082 && count<= 10132 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1210 == 1 && count >= 10082 && count<= 10132 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1210 == 2 && count >= 10082 && count<= 10132 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1220 = Math.floor(Math.random() *3);
    console.log(aite1220, "ランダムな手が出る");
    
    if(aite1220 == 0){
        console.log("グー")
        $('.ch1220').hide();
        $('.pa1220').hide();
            
    }else if(aite1220 == 1){
        console.log("チョキ")
        $('.gu1220').hide();
        $('.pa1220').hide();
    }else if(aite1220 == 2){
        console.log("パー")
        $('.gu1220').hide();
        $('.ch1220').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1220 == 0 &&  count >= 10120 && count<= 10170 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1220 == 1 && count >= 10120 && count<= 10170 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1220 == 2 && count >= 10120 && count<= 10170 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1220 == 0 && count >= 10120 && count<= 10170 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1220 == 1 && count >= 10120 && count<= 10170 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1220 == 2 && count >= 10120 && count<= 10170 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1220 == 0 && count >= 10120 && count<= 10170 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1220 == 1 && count >= 10120 && count<= 10170 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1220 == 2 && count >= 10120 && count<= 10170 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1230 = Math.floor(Math.random() *3);
    console.log(aite1230, "ランダムな手が出る");
    
    if(aite1230 == 0){
        console.log("グー")
        $('.ch1230').hide();
        $('.pa1230').hide();
            
    }else if(aite1230 == 1){
        console.log("チョキ")
        $('.gu1230').hide();
        $('.pa1230').hide();
    }else if(aite1230 == 2){
        console.log("パー")
        $('.gu1230').hide();
        $('.ch1230').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1230 == 0 &&  count >= 10171 && count<= 10211 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1230 == 1 && count >= 10171 && count<= 10211 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1230 == 2 && count >= 10171 && count<= 10211 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1230 == 0 && count >= 10171 && count<= 10211 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1230 == 1 && count >= 10171 && count<= 10211 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1230 == 2 && count >= 10171 && count<= 10211 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1230 == 0 && count >= 50 && count<= 10211 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1230 == 1 && count >= 50 && count<= 10211 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1230 == 2 && count >= 50 && count<= 10211 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1240 = Math.floor(Math.random() *3);
    console.log(aite1240, "ランダムな手が出る");
    
    if(aite1240 == 0){
        console.log("グー")
        $('.ch1240').hide();
        $('.pa1240').hide();
            
    }else if(aite1240 == 1){
        console.log("チョキ")
        $('.gu1240').hide();
        $('.pa1240').hide();
    }else if(aite1240 == 2){
        console.log("パー")
        $('.gu1240').hide();
        $('.ch1240').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1240 == 0 &&  count >= 10203 && count<= 10253 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1240 == 1 && count >= 10203 && count<= 10253 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1240 == 2 && count >= 10203 && count<= 10253 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1240 == 0 && count >= 10203 && count<= 10253 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1240 == 1 && count >= 10203 && count<= 10253 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1240 == 2 && count >= 10203 && count<= 10253 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1240 == 0 && count >= 10203 && count<= 10253 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1240 == 1 && count >= 10203 && count<= 10253 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1240 == 2 && count >= 10203 && count<= 10253 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1250 = Math.floor(Math.random() *3);
    console.log(aite1250, "ランダムな手が出る");
    
    if(aite1250 == 0){
        console.log("グー")
        $('.ch1250').hide();
        $('.pa1250').hide();
            
    }else if(aite1250 == 1){
        console.log("チョキ")
        $('.gu1250').hide();
        $('.pa1250').hide();
    }else if(aite1250 == 2){
        console.log("パー")
        $('.gu1250').hide();
        $('.ch1250').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1250 == 0 &&  count >= 10254 && count<= 10292 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1250 == 1 && count >= 10254 && count<= 10292 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1250 == 2 && count >= 10254 && count<= 10292 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1250 == 0 && count >= 10254 && count<= 10292 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1250 == 1 && count >= 10254 && count<= 10292 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1250 == 2 && count >= 10254 && count<= 10292 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1250 == 0 && count >= 10254 && count<= 10292 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1250 == 1 && count >= 10254 && count<= 10292 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1250 == 2 && count >= 10254 && count<= 10292 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1260 = Math.floor(Math.random() *3);
    console.log(aite1260, "ランダムな手が出る");
    
    if(aite1260 == 0){
        console.log("グー")
        $('.ch1260').hide();
        $('.pa1260').hide();
            
    }else if(aite1260 == 1){
        console.log("チョキ")
        $('.gu1260').hide();
        $('.pa1260').hide();
    }else if(aite1260 == 2){
        console.log("パー")
        $('.gu1260').hide();
        $('.ch1260').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1260 == 0 &&  count >= 10323 && count<= 10373 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1260 == 1 && count >= 10323 && count<= 10373 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1260 == 2 && count >= 10323 && count<= 10373 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1260 == 0 && count >= 10323 && count<= 10373 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1260 == 1 && count >= 10323 && count<= 10373 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1260 == 2 && count >= 10323 && count<= 10373 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1260 == 0 && count >= 10323 && count<= 10373 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1260 == 1 && count >= 10323 && count<= 10373 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1260 == 2 && count >= 10323 && count<= 10373 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1270 = Math.floor(Math.random() *3);
    console.log(aite1270, "ランダムな手が出る");
    
    if(aite1270 == 0){
        console.log("グー")
        $('.ch1270').hide();
        $('.pa1270').hide();
            
    }else if(aite1270 == 1){
        console.log("チョキ")
        $('.gu1270').hide();
        $('.pa1270').hide();
    }else if(aite1270 == 2){
        console.log("パー")
        $('.gu1270').hide();
        $('.ch1270').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1270 == 0 &&  count >= 10405 && count<= 10455 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1270 == 1 && count >= 10405 && count<= 10455 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1270 == 2 && count >= 10405 && count<= 10455 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1270 == 0 && count >= 10405 && count<= 10455 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1270 == 1 && count >= 10405 && count<= 10455 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1270 == 2 && count >= 10405 && count<= 10455 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1270 == 0 && count >= 10405 && count<= 10455 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1270 == 1 && count >= 10405 && count<= 10455 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1270 == 2 && count >= 10405 && count<= 10455 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1280 = Math.floor(Math.random() *3);
    console.log(aite1280, "ランダムな手が出る");
    
    if(aite1280 == 0){
        console.log("グー")
        $('.ch1280').hide();
        $('.pa1280').hide();
            
    }else if(aite1280 == 1){
        console.log("チョキ")
        $('.gu1280').hide();
        $('.pa1280').hide();
    }else if(aite1280 == 2){
        console.log("パー")
        $('.gu1280').hide();
        $('.ch1280').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1280 == 0 &&  count >= 10469 && count<= 10519 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1280 == 1 && count >= 10469 && count<= 10519 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1280 == 2 && count >= 10469 && count<= 10519 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1280 == 0 && count >= 10469 && count<= 10519 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1280 == 1 && count >= 10469 && count<= 10519 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1280 == 2 && count >= 10469 && count<= 10519 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1280 == 0 && count >= 10469 && count<= 10519 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1280 == 1 && count >= 10469 && count<= 10519 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1280 == 2 && count >= 10469 && count<= 10519 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1290 = Math.floor(Math.random() *3);
    console.log(aite1290, "ランダムな手が出る");
    
    if(aite1290 == 0){
        console.log("グー")
        $('.ch1290').hide();
        $('.pa1290').hide();
            
    }else if(aite1290 == 1){
        console.log("チョキ")
        $('.gu1290').hide();
        $('.pa1290').hide();
    }else if(aite1290 == 2){
        console.log("パー")
        $('.gu1290').hide();
        $('.ch1290').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1290 == 0 &&  count >= 10520 && count<= 10563 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1290 == 1 && count >= 10520 && count<= 10563 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1290 == 2 && count >= 10520 && count<= 10563 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1290 == 0 && count >= 10520 && count<= 10563 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1290 == 1 && count >= 10520 && count<= 10563 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1290 == 2 && count >= 10520 && count<= 10563 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1290 == 0 && count >= 10520 && count<= 10563 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1290 == 1 && count >= 10520 && count<= 10563 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1290 == 2 && count >= 10520 && count<= 10563 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1300 = Math.floor(Math.random() *3);
    console.log(aite1300, "ランダムな手が出る");
    
    if(aite1300 == 0){
        console.log("グー")
        $('.ch1300').hide();
        $('.pa1300').hide();
            
    }else if(aite1300 == 1){
        console.log("チョキ")
        $('.gu1300').hide();
        $('.pa1300').hide();
    }else if(aite1300 == 2){
        console.log("パー")
        $('.gu1300').hide();
        $('.ch1300').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1300 == 0 &&  count >= 10570 && count<= 10620 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1300 == 1 && count >= 10570 && count<= 10620 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1300 == 2 && count >= 10570 && count<= 10620 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1300 == 0 && count >= 10570 && count<= 10620 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1300 == 1 && count >= 10570 && count<= 10620 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1300 == 2 && count >= 10570 && count<= 10620 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1300 == 0 && count >= 10570 && count<= 10620 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1300 == 1 && count >= 10570 && count<= 10620 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1300 == 2 && count >= 10570 && count<= 10620 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1310 = Math.floor(Math.random() *3);
    console.log(aite1310, "ランダムな手が出る");
    
    if(aite1310 == 0){
        console.log("グー")
        $('.ch1310').hide();
        $('.pa1310').hide();
            
    }else if(aite1310 == 1){
        console.log("チョキ")
        $('.gu1310').hide();
        $('.pa1310').hide();
    }else if(aite1310 == 2){
        console.log("パー")
        $('.gu1310').hide();
        $('.ch1310').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1310 == 0 &&  count >= 10649 && count<= 10699 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1310 == 1 && count >= 10649 && count<= 10699 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1310 == 2 && count >= 10649 && count<= 10699 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1310 == 0 && count >= 10649 && count<= 10699 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1310 == 1 && count >= 10649 && count<= 10699 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1310 == 2 && count >= 10649 && count<= 10699 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1310 == 0 && count >= 10649 && count<= 10699 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1310 == 1 && count >= 10649 && count<= 10699 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1310 == 2 && count >= 10649 && count<= 10699 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1320 = Math.floor(Math.random() *3);
    console.log(aite1320, "ランダムな手が出る");
    
    if(aite1320 == 0){
        console.log("グー")
        $('.ch1320').hide();
        $('.pa1320').hide();
            
    }else if(aite1320 == 1){
        console.log("チョキ")
        $('.gu1320').hide();
        $('.pa1320').hide();
    }else if(aite1320 == 2){
        console.log("パー")
        $('.gu1320').hide();
        $('.ch1320').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1320 == 0 &&  count >= 10729 && count<= 10779 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1320 == 1 && count >= 10729 && count<= 10779 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1320 == 2 && count >= 10729 && count<= 10779 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1320 == 0 && count >= 10729 && count<= 10779 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1320 == 1 && count >= 10729 && count<= 10779 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1320 == 2 && count >= 10729 && count<= 10779 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1320 == 0 && count >= 10729 && count<= 10779 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1320 == 1 && count >= 10729 && count<= 10779 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1320 == 2 && count >= 10729 && count<= 10779 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1330 = Math.floor(Math.random() *3);
    console.log(aite1330, "ランダムな手が出る");
    
    if(aite1330 == 0){
        console.log("グー")
        $('.ch1330').hide();
        $('.pa1330').hide();
            
    }else if(aite1330 == 1){
        console.log("チョキ")
        $('.gu1330').hide();
        $('.pa1330').hide();
    }else if(aite1330 == 2){
        console.log("パー")
        $('.gu1330').hide();
        $('.ch1330').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1330 == 0 &&  count >= 10812 && count<= 10862 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1330 == 1 && count >= 10812 && count<= 10862 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1330 == 2 && count >= 10812 && count<= 10862 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1330 == 0 && count >= 10812 && count<= 10862 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1330 == 1 && count >= 10812 && count<= 10862 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1330 == 2 && count >= 10812 && count<= 10862 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1330 == 0 && count >= 10812 && count<= 10862 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1330 == 1 && count >= 10812 && count<= 10862 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1330 == 2 && count >= 10812 && count<= 10862 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1340 = Math.floor(Math.random() *3);
    console.log(aite1340, "ランダムな手が出る");
    
    if(aite1340 == 0){
        console.log("グー")
        $('.ch1340').hide();
        $('.pa1340').hide();
            
    }else if(aite1340 == 1){
        console.log("チョキ")
        $('.gu1340').hide();
        $('.pa1340').hide();
    }else if(aite1340 == 2){
        console.log("パー")
        $('.gu1340').hide();
        $('.ch1340').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1340 == 0 &&  count >= 10863 && count<= 10900 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1340 == 1 && count >= 10863 && count<= 10900 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1340 == 2 && count >= 10863 && count<= 10900 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1340 == 0 && count >= 10863 && count<= 10900 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1340 == 1 && count >= 10863 && count<= 10900 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1340 == 2 && count >= 10863 && count<= 10900 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1340 == 0 && count >= 10863 && count<= 10900 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1340 == 1 && count >= 10863 && count<= 10900 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1340 == 2 && count >= 10863 && count<= 10900 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1350 = Math.floor(Math.random() *3);
    console.log(aite1350, "ランダムな手が出る");
    
    if(aite1350 == 0){
        console.log("グー")
        $('.ch1350').hide();
        $('.pa1350').hide();
            
    }else if(aite1350 == 1){
        console.log("チョキ")
        $('.gu1350').hide();
        $('.pa1350').hide();
    }else if(aite1350 == 2){
        console.log("パー")
        $('.gu1350').hide();
        $('.ch1350').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1350 == 0 &&  count >= 10901 && count<= 10938 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1350 == 1 && count >= 10901 && count<= 10938 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1350 == 2 && count >= 10901 && count<= 10938 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1350 == 0 && count >= 10901 && count<= 10938 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1350 == 1 && count >= 10901 && count<= 10938 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1350 == 2 && count >= 10901 && count<= 10938 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1350 == 0 && count >= 10901 && count<= 10938 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1350 == 1 && count >= 10901 && count<= 10938 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1350 == 2 && count >= 10901 && count<= 10938 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1360 = Math.floor(Math.random() *3);
    console.log(aite1360, "ランダムな手が出る");
    
    if(aite1360 == 0){
        console.log("グー")
        $('.ch1360').hide();
        $('.pa1360').hide();
            
    }else if(aite1360 == 1){
        console.log("チョキ")
        $('.gu1360').hide();
        $('.pa1360').hide();
    }else if(aite1360 == 2){
        console.log("パー")
        $('.gu1360').hide();
        $('.ch1360').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1360 == 0 &&  count >= 10972 && count<= 11022 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1360 == 1 && count >= 10972 && count<= 11022 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1360 == 2 && count >= 10972 && count<= 11022 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1360 == 0 && count >= 10972 && count<= 11022 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1360 == 1 && count >= 10972 && count<= 11022 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1360 == 2 && count >= 10972 && count<= 11022 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1360 == 0 && count >= 10972 && count<= 11022 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1360 == 1 && count >= 10972 && count<= 11022 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1360 == 2 && count >= 10972 && count<= 11022 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1370 = Math.floor(Math.random() *3);
    console.log(aite1370, "ランダムな手が出る");
    
    if(aite1370 == 0){
        console.log("グー")
        $('.ch1370').hide();
        $('.pa1370').hide();
            
    }else if(aite1370 == 1){
        console.log("チョキ")
        $('.gu1370').hide();
        $('.pa1370').hide();
    }else if(aite1370 == 2){
        console.log("パー")
        $('.gu1370').hide();
        $('.ch1370').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1370 == 0 &&  count >= 11055 && count<= 11105 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1370 == 1 && count >= 11055 && count<= 11105 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1370 == 2 && count >= 11055 && count<= 11105 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1370 == 0 && count >= 11055 && count<= 11105 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1370 == 1 && count >= 11055 && count<= 11105 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1370 == 2 && count >= 11055 && count<= 11105 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1370 == 0 && count >= 11055 && count<= 11105 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1370 == 1 && count >= 11055 && count<= 11105 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1370 == 2 && count >= 11055 && count<= 11105 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1380 = Math.floor(Math.random() *3);
    console.log(aite1380, "ランダムな手が出る");
    
    if(aite1380 == 0){
        console.log("グー")
        $('.ch1380').hide();
        $('.pa1380').hide();
            
    }else if(aite1380 == 1){
        console.log("チョキ")
        $('.gu1380').hide();
        $('.pa1380').hide();
    }else if(aite1380 == 2){
        console.log("パー")
        $('.gu1380').hide();
        $('.ch1380').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1380 == 0 &&  count >= 11131 && count<= 11181 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1380 == 1 && count >= 11131 && count<= 11181 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1380 == 2 && count >= 11131 && count<= 11181 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1380 == 0 && count >= 11131 && count<= 11181 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1380 == 1 && count >= 11131 && count<= 11181 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1380 == 2 && count >= 11131 && count<= 11181 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1380 == 0 && count >= 11131 && count<= 11181 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1380 == 1 && count >= 11131 && count<= 11181 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1380 == 2 && count >= 11131 && count<= 11181 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1390 = Math.floor(Math.random() *3);
    console.log(aite1390, "ランダムな手が出る");
    
    if(aite1390 == 0){
        console.log("グー")
        $('.ch1390').hide();
        $('.pa1390').hide();
            
    }else if(aite1390 == 1){
        console.log("チョキ")
        $('.gu1390').hide();
        $('.pa1390').hide();
    }else if(aite1390 == 2){
        console.log("パー")
        $('.gu1390').hide();
        $('.ch1390').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1390 == 0 &&  count >= 11209 && count<= 11259 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1390 == 1 && count >= 11209 && count<= 11259 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1390 == 2 && count >= 11209 && count<= 11259 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1390 == 0 && count >= 11209 && count<= 11259 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1390 == 1 && count >= 11209 && count<= 11259 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1390 == 2 && count >= 11209 && count<= 11259 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1390 == 0 && count >= 11209 && count<= 11259 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1390 == 1 && count >= 11209 && count<= 11259 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1390 == 2 && count >= 11209 && count<= 11259 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1400 = Math.floor(Math.random() *3);
    console.log(aite1400, "ランダムな手が出る");
    
    if(aite1400 == 0){
        console.log("グー")
        $('.ch1400').hide();
        $('.pa1400').hide();
            
    }else if(aite1400 == 1){
        console.log("チョキ")
        $('.gu1400').hide();
        $('.pa1400').hide();
    }else if(aite1400 == 2){
        console.log("パー")
        $('.gu1400').hide();
        $('.ch1400').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1400 == 0 &&  count >= 11290 && count<= 11340 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1400 == 1 && count >= 11290 && count<= 11340 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1400 == 2 && count >= 11290 && count<= 11340 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1400 == 0 && count >= 11290 && count<= 11340 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1400 == 1 && count >= 11290 && count<= 11340 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1400 == 2 && count >= 11290 && count<= 11340 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1400 == 0 && count >= 11290 && count<= 11340 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1400 == 1 && count >= 11290 && count<= 11340 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1400 == 2 && count >= 11290 && count<= 11340 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1410 = Math.floor(Math.random() *3);
    console.log(aite1410, "ランダムな手が出る");
    
    if(aite1410 == 0){
        console.log("グー")
        $('.ch1410').hide();
        $('.pa1410').hide();
            
    }else if(aite1410 == 1){
        console.log("チョキ")
        $('.gu1410').hide();
        $('.pa1410').hide();
    }else if(aite1410 == 2){
        console.log("パー")
        $('.gu1410').hide();
        $('.ch1410').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1410 == 0 &&  count >= 11354 && count<= 11404 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1410 == 1 && count >= 11354 && count<= 11404 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1410 == 2 && count >= 11354 && count<= 11404 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1410 == 0 && count >= 11354 && count<= 11404 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1410 == 1 && count >= 11354 && count<= 11404 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1410 == 2 && count >= 11354 && count<= 11404 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1410 == 0 && count >= 11354 && count<= 11404 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1410 == 1 && count >= 11354 && count<= 11404 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1410 == 2 && count >= 11354 && count<= 11404 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1420 = Math.floor(Math.random() *3);
    console.log(aite1420, "ランダムな手が出る");
    
    if(aite1420 == 0){
        console.log("グー")
        $('.ch1420').hide();
        $('.pa1420').hide();
            
    }else if(aite1420 == 1){
        console.log("チョキ")
        $('.gu1420').hide();
        $('.pa1420').hide();
    }else if(aite1420 == 2){
        console.log("パー")
        $('.gu1420').hide();
        $('.ch1420').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1420 == 0 &&  count >= 11405 && count<= 11422 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1420 == 1 && count >= 11405 && count<= 11422 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1420 == 2 && count >= 11405 && count<= 11422 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1420 == 0 && count >= 11405 && count<= 11422 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1420 == 1 && count >= 11405 && count<= 11422 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1420 == 2 && count >= 11405 && count<= 11422 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1420 == 0 && count >= 11405 && count<= 11422 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1420 == 1 && count >= 11405 && count<= 11422 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1420 == 2 && count >= 11405 && count<= 11422 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1430 = Math.floor(Math.random() *3);
    console.log(aite1430, "ランダムな手が出る");
    
    if(aite1430 == 0){
        console.log("グー")
        $('.ch1430').hide();
        $('.pa1430').hide();
            
    }else if(aite1430 == 1){
        console.log("チョキ")
        $('.gu1430').hide();
        $('.pa1430').hide();
    }else if(aite1430 == 2){
        console.log("パー")
        $('.gu1430').hide();
        $('.ch1430').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1430 == 0 &&  count >= 114223 && count<= 11465 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1430 == 1 && count >= 114223 && count<= 11465 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1430 == 2 && count >= 114223 && count<= 11465 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1430 == 0 && count >= 114223 && count<= 11465 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1430 == 1 && count >= 114223 && count<= 11465 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1430 == 2 && count >= 114223 && count<= 11465 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1430 == 0 && count >= 114223 && count<= 11465 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1430 == 1 && count >= 114223 && count<= 11465 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1430 == 2 && count >= 114223 && count<= 11465 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1440 = Math.floor(Math.random() *3);
    console.log(aite1440, "ランダムな手が出る");
    
    if(aite1440 == 0){
        console.log("グー")
        $('.ch1440').hide();
        $('.pa1440').hide();
            
    }else if(aite1440 == 1){
        console.log("チョキ")
        $('.gu1440').hide();
        $('.pa1440').hide();
    }else if(aite1440 == 2){
        console.log("パー")
        $('.gu1440').hide();
        $('.ch1440').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1440 == 0 &&  count >= 11466 && count<= 11505 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1440 == 1 && count >= 11466 && count<= 11505 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1440 == 2 && count >= 11466 && count<= 11505 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1440 == 0 && count >= 11466 && count<= 11505 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1440 == 1 && count >= 11466 && count<= 11505 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1440 == 2 && count >= 11466 && count<= 11505 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1440 == 0 && count >= 11466 && count<= 11505 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1440 == 1 && count >= 11466 && count<= 11505 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1440 == 2 && count >= 11466 && count<= 11505 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1450 = Math.floor(Math.random() *3);
    console.log(aite1450, "ランダムな手が出る");
    
    if(aite1450 == 0){
        console.log("グー")
        $('.ch1450').hide();
        $('.pa1450').hide();
            
    }else if(aite1450 == 1){
        console.log("チョキ")
        $('.gu1450').hide();
        $('.pa1450').hide();
    }else if(aite1450 == 2){
        console.log("パー")
        $('.gu1450').hide();
        $('.ch1450').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1450 == 0 &&  count >= 11531 && count<= 11581 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1450 == 1 && count >= 11531 && count<= 11581 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1450 == 2 && count >= 11531 && count<= 11581 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1450 == 0 && count >= 11531 && count<= 11581 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1450 == 1 && count >= 11531 && count<= 11581 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1450 == 2 && count >= 11531 && count<= 11581 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1450 == 0 && count >= 11531 && count<= 11581 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1450 == 1 && count >= 11531 && count<= 11581 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1450 == 2 && count >= 11531 && count<= 11581 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1460 = Math.floor(Math.random() *3);
    console.log(aite1460, "ランダムな手が出る");
    
    if(aite1460 == 0){
        console.log("グー")
        $('.ch1460').hide();
        $('.pa1460').hide();
            
    }else if(aite1460 == 1){
        console.log("チョキ")
        $('.gu1460').hide();
        $('.pa1460').hide();
    }else if(aite1460 == 2){
        console.log("パー")
        $('.gu1460').hide();
        $('.ch1460').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1460 == 0 &&  count >= 11613 && count<= 11663 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1460 == 1 && count >= 11613 && count<= 11663 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1460 == 2 && count >= 11613 && count<= 11663 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1460 == 0 && count >= 11613 && count<= 11663 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1460 == 1 && count >= 11613 && count<= 11663 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1460 == 2 && count >= 11613 && count<= 11663 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1460 == 0 && count >= 11613 && count<= 11663 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1460 == 1 && count >= 11613 && count<= 11663 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1460 == 2 && count >= 11613 && count<= 11663 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1470 = Math.floor(Math.random() *3);
    console.log(aite1470, "ランダムな手が出る");
    
    if(aite1470 == 0){
        console.log("グー")
        $('.ch1470').hide();
        $('.pa1470').hide();
            
    }else if(aite1470 == 1){
        console.log("チョキ")
        $('.gu1470').hide();
        $('.pa1470').hide();
    }else if(aite1470 == 2){
        console.log("パー")
        $('.gu1470').hide();
        $('.ch1470').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1470 == 0 &&  count >= 11690 && count<= 11740 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1470 == 1 && count >= 11690 && count<= 11740 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1470 == 2 && count >= 11690 && count<= 11740 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1470 == 0 && count >= 11690 && count<= 11740 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1470 == 1 && count >= 11690 && count<= 11740 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1470 == 2 && count >= 11690 && count<= 11740 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1470 == 0 && count >= 11690 && count<= 11740 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1470 == 1 && count >= 11690 && count<= 11740 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1470 == 2 && count >= 11690 && count<= 11740 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1480 = Math.floor(Math.random() *3);
    console.log(aite1480, "ランダムな手が出る");
    
    if(aite1480 == 0){
        console.log("グー")
        $('.ch1480').hide();
        $('.pa1480').hide();
            
    }else if(aite1480 == 1){
        console.log("チョキ")
        $('.gu1480').hide();
        $('.pa1480').hide();
    }else if(aite1480 == 2){
        console.log("パー")
        $('.gu1480').hide();
        $('.ch1480').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1480 == 0 &&  count >= 11771 && count<= 11821 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1480 == 1 && count >= 11771 && count<= 11821 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1480 == 2 && count >= 11771 && count<= 11821 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1480 == 0 && count >= 11771 && count<= 11821 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1480 == 1 && count >= 11771 && count<= 11821 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1480 == 2 && count >= 11771 && count<= 11821 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1480 == 0 && count >= 11771 && count<= 11821 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1480 == 1 && count >= 11771 && count<= 11821 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1480 == 2 && count >= 11771 && count<= 11821 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1490 = Math.floor(Math.random() *3);
    console.log(aite1490, "ランダムな手が出る");
    
    if(aite1490 == 0){
        console.log("グー")
        $('.ch1490').hide();
        $('.pa1490').hide();
            
    }else if(aite1490 == 1){
        console.log("チョキ")
        $('.gu1490').hide();
        $('.pa1490').hide();
    }else if(aite1490 == 2){
        console.log("パー")
        $('.gu1490').hide();
        $('.ch1490').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1490 == 0 &&  count >= 11856 && count<= 11906 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1490 == 1 && count >= 11856 && count<= 11906 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1490 == 2 && count >= 11856 && count<= 11906 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1490 == 0 && count >= 11856 && count<= 11906 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1490 == 1 && count >= 11856 && count<= 11906 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1490 == 2 && count >= 11856 && count<= 11906 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1490 == 0 && count >= 11856 && count<= 11906 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1490 == 1 && count >= 11856 && count<= 11906 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1490 == 2 && count >= 11856 && count<= 11906 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1500 = Math.floor(Math.random() *3);
    console.log(aite1500, "ランダムな手が出る");
    
    if(aite1500 == 0){
        console.log("グー")
        $('.ch1500').hide();
        $('.pa1500').hide();
            
    }else if(aite1500 == 1){
        console.log("チョキ")
        $('.gu1500').hide();
        $('.pa1500').hide();
    }else if(aite1500 == 2){
        console.log("パー")
        $('.gu1500').hide();
        $('.ch1500').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1500 == 0 &&  count >= 11934 && count<= 11984 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1500 == 1 && count >= 11934 && count<= 11984 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1500 == 2 && count >= 11934 && count<= 11984 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1500 == 0 && count >= 11934 && count<= 11984 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1500 == 1 && count >= 11934 && count<= 11984 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1500 == 2 && count >= 11934 && count<= 11984 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1500 == 0 && count >= 11934 && count<= 11984 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1500 == 1 && count >= 11934 && count<= 11984 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1500 == 2 && count >= 11934 && count<= 11984 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1510 = Math.floor(Math.random() *3);
    console.log(aite1510, "ランダムな手が出る");
    
    if(aite1510 == 0){
        console.log("グー")
        $('.ch1510').hide();
        $('.pa1510').hide();
            
    }else if(aite1510 == 1){
        console.log("チョキ")
        $('.gu1510').hide();
        $('.pa1510').hide();
    }else if(aite1510 == 2){
        console.log("パー")
        $('.gu1510').hide();
        $('.ch1510').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1510 == 0 &&  count >= 12021 && count<= 12071 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1510 == 1 && count >= 12021 && count<= 12071 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1510 == 2 && count >= 12021 && count<= 12071 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1510 == 0 && count >= 12021 && count<= 12071 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1510 == 1 && count >= 12021 && count<= 12071 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1510 == 2 && count >= 12021 && count<= 12071 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1510 == 0 && count >= 12021 && count<= 12071 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1510 == 1 && count >= 12021 && count<= 12071 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1510 == 2 && count >= 12021 && count<= 12071 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1520 = Math.floor(Math.random() *3);
    console.log(aite1520, "ランダムな手が出る");
    
    if(aite1520 == 0){
        console.log("グー")
        $('.ch1520').hide();
        $('.pa1520').hide();
            
    }else if(aite1520 == 1){
        console.log("チョキ")
        $('.gu1520').hide();
        $('.pa1520').hide();
    }else if(aite1520 == 2){
        console.log("パー")
        $('.gu1520').hide();
        $('.ch1520').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1520 == 0 &&  count >= 12099 && count<= 12149 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1520 == 1 && count >= 12099 && count<= 12149 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1520 == 2 && count >= 12099 && count<= 12149 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1520 == 0 && count >= 12099 && count<= 12149 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1520 == 1 && count >= 12099 && count<= 12149 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1520 == 2 && count >= 12099 && count<= 12149 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1520 == 0 && count >= 12099 && count<= 12149 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1520 == 1 && count >= 12099 && count<= 12149 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1520 == 2 && count >= 12099 && count<= 12149 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1530 = Math.floor(Math.random() *3);
    console.log(aite1530, "ランダムな手が出る");
    
    if(aite1530 == 0){
        console.log("グー")
        $('.ch1530').hide();
        $('.pa1530').hide();
            
    }else if(aite1530 == 1){
        console.log("チョキ")
        $('.gu1530').hide();
        $('.pa1530').hide();
    }else if(aite1530 == 2){
        console.log("パー")
        $('.gu1530').hide();
        $('.ch1530').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1530 == 0 &&  count >= 12150 && count<= 12188 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1530 == 1 && count >= 12150 && count<= 12188 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1530 == 2 && count >= 12150 && count<= 12188 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1530 == 0 && count >= 12150 && count<= 12188 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1530 == 1 && count >= 12150 && count<= 12188 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1530 == 2 && count >= 12150 && count<= 12188 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1530 == 0 && count >= 12150 && count<= 12188 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1530 == 1 && count >= 12150 && count<= 12188 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1530 == 2 && count >= 12150 && count<= 12188 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1540 = Math.floor(Math.random() *3);
    console.log(aite1540, "ランダムな手が出る");
    
    if(aite1540 == 0){
        console.log("グー")
        $('.ch1540').hide();
        $('.pa1540').hide();
            
    }else if(aite1540 == 1){
        console.log("チョキ")
        $('.gu1540').hide();
        $('.pa1540').hide();
    }else if(aite1540 == 2){
        console.log("パー")
        $('.gu1540').hide();
        $('.ch1540').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1540 == 0 &&  count >= 12189 && count<= 12226 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1540 == 1 && count >= 12189 && count<= 12226 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1540 == 2 && count >= 12189 && count<= 12226 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1540 == 0 && count >= 12189 && count<= 12226 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1540 == 1 && count >= 12189 && count<= 12226 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1540 == 2 && count >= 12189 && count<= 12226 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1540 == 0 && count >= 12189 && count<= 12226 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1540 == 1 && count >= 12189 && count<= 12226 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1540 == 2 && count >= 12189 && count<= 12226 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1550 = Math.floor(Math.random() *3);
    console.log(aite1550, "ランダムな手が出る");
    
    if(aite1550 == 0){
        console.log("グー")
        $('.ch1550').hide();
        $('.pa1550').hide();
            
    }else if(aite1550 == 1){
        console.log("チョキ")
        $('.gu1550').hide();
        $('.pa1550').hide();
    }else if(aite1550 == 2){
        console.log("パー")
        $('.gu1550').hide();
        $('.ch1550').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1550 == 0 &&  count >= 12257 && count<= 12307 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1550 == 1 && count >= 12257 && count<= 12307 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1550 == 2 && count >= 12257 && count<= 12307 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1550 == 0 && count >= 12257 && count<= 12307 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1550 == 1 && count >= 12257 && count<= 12307 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1550 == 2 && count >= 12257 && count<= 12307 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1550 == 0 && count >= 12257 && count<= 12307 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1550 == 1 && count >= 12257 && count<= 12307 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1550 == 2 && count >= 12257 && count<= 12307 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1560 = Math.floor(Math.random() *3);
    console.log(aite1560, "ランダムな手が出る");
    
    if(aite1560 == 0){
        console.log("グー")
        $('.ch1560').hide();
        $('.pa1560').hide();
            
    }else if(aite1560 == 1){
        console.log("チョキ")
        $('.gu1560').hide();
        $('.pa1560').hide();
    }else if(aite1560 == 2){
        console.log("パー")
        $('.gu1560').hide();
        $('.ch1560').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1560 == 0 &&  count >= 12341 && count<= 12391 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1560 == 1 && count >= 12341 && count<= 12391 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1560 == 2 && count >= 12341 && count<= 12391 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1560 == 0 && count >= 12341 && count<= 12391 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1560 == 1 && count >= 12341 && count<= 12391 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1560 == 2 && count >= 12341 && count<= 12391 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1560 == 0 && count >= 12341 && count<= 12391 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1560 == 1 && count >= 12341 && count<= 12391 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1560 == 2 && count >= 12341 && count<= 12391 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1570 = Math.floor(Math.random() *3);
    console.log(aite1570, "ランダムな手が出る");
    
    if(aite1570 == 0){
        console.log("グー")
        $('.ch1570').hide();
        $('.pa1570').hide();
            
    }else if(aite1570 == 1){
        console.log("チョキ")
        $('.gu1570').hide();
        $('.pa1570').hide();
    }else if(aite1570 == 2){
        console.log("パー")
        $('.gu1570').hide();
        $('.ch1570').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1570 == 0 &&  count >= 12418 && count<= 12468 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1570 == 1 && count >= 12418 && count<= 12468 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1570 == 2 && count >= 12418 && count<= 12468 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1570 == 0 && count >= 12418 && count<= 12468 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1570 == 1 && count >= 12418 && count<= 12468 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1570 == 2 && count >= 12418 && count<= 12468 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1570 == 0 && count >= 12418 && count<= 12468 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1570 == 1 && count >= 12418 && count<= 12468 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1570 == 2 && count >= 12418 && count<= 12468 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1580 = Math.floor(Math.random() *3);
    console.log(aite1580, "ランダムな手が出る");
    
    if(aite1580 == 0){
        console.log("グー")
        $('.ch1580').hide();
        $('.pa1580').hide();
            
    }else if(aite1580 == 1){
        console.log("チョキ")
        $('.gu1580').hide();
        $('.pa1580').hide();
    }else if(aite1580 == 2){
        console.log("パー")
        $('.gu1580').hide();
        $('.ch1580').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1580 == 0 &&  count >= 12502 && count<= 12552 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1580 == 1 && count >= 12502 && count<= 12552 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1580 == 2 && count >= 12502 && count<= 12552 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1580 == 0 && count >= 12502 && count<= 12552 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1580 == 1 && count >= 12502 && count<= 12552 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1580 == 2 && count >= 12502 && count<= 12552 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1580 == 0 && count >= 12502 && count<= 12552 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1580 == 1 && count >= 12502 && count<= 12552 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1580 == 2 && count >= 12502 && count<= 12552 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1590 = Math.floor(Math.random() *3);
    console.log(aite1590, "ランダムな手が出る");
    
    if(aite1590 == 0){
        console.log("グー")
        $('.ch1590').hide();
        $('.pa1590').hide();
            
    }else if(aite1590 == 1){
        console.log("チョキ")
        $('.gu1590').hide();
        $('.pa1590').hide();
    }else if(aite1590 == 2){
        console.log("パー")
        $('.gu1590').hide();
        $('.ch1590').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1590 == 0 &&  count >= 12581 && count<= 12631 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1590 == 1 && count >= 12581 && count<= 12631 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1590 == 2 && count >= 12581 && count<= 12631 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1590 == 0 && count >= 12581 && count<= 12631 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1590 == 1 && count >= 12581 && count<= 12631 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1590 == 2 && count >= 12581 && count<= 12631 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1590 == 0 && count >= 12581 && count<= 12631 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1590 == 1 && count >= 12581 && count<= 12631 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1590 == 2 && count >= 12581 && count<= 12631 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1600 = Math.floor(Math.random() *3);
    console.log(aite1600, "ランダムな手が出る");
    
    if(aite1600 == 0){
        console.log("グー")
        $('.ch1600').hide();
        $('.pa1600').hide();
            
    }else if(aite1600 == 1){
        console.log("チョキ")
        $('.gu1600').hide();
        $('.pa1600').hide();
    }else if(aite1600 == 2){
        console.log("パー")
        $('.gu1600').hide();
        $('.ch1600').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1600 == 0 &&  count >= 12655 && count<= 12705 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1600 == 1 && count >= 12655 && count<= 12705 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1600 == 2 && count >= 12655 && count<= 12705 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1600 == 0 && count >= 12655 && count<= 12705 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1600 == 1 && count >= 12655 && count<= 12705 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1600 == 2 && count >= 12655 && count<= 12705 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1600 == 0 && count >= 12655 && count<= 12705 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1600 == 1 && count >= 12655 && count<= 12705 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1600 == 2 && count >= 12655 && count<= 12705 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1610 = Math.floor(Math.random() *3);
    console.log(aite1610, "ランダムな手が出る");
    
    if(aite1610 == 0){
        console.log("グー")
        $('.ch1610').hide();
        $('.pa1610').hide();
            
    }else if(aite1610 == 1){
        console.log("チョキ")
        $('.gu1610').hide();
        $('.pa1610').hide();
    }else if(aite1610 == 2){
        console.log("パー")
        $('.gu1610').hide();
        $('.ch1610').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1610 == 0 &&  count >= 12705 && count<= 12747 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1610 == 1 && count >= 12705 && count<= 12747 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1610 == 2 && count >= 12705 && count<= 12747 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1610 == 0 && count >= 12705 && count<= 12747 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1610 == 1 && count >= 12705 && count<= 12747 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1610 == 2 && count >= 12705 && count<= 12747 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1610 == 0 && count >= 12705 && count<= 12747 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1610 == 1 && count >= 12705 && count<= 12747 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1610 == 2 && count >= 12705 && count<= 12747 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1620 = Math.floor(Math.random() *3);
    console.log(aite1620, "ランダムな手が出る");
    
    if(aite1620 == 0){
        console.log("グー")
        $('.ch1620').hide();
        $('.pa1620').hide();
            
    }else if(aite1620 == 1){
        console.log("チョキ")
        $('.gu1620').hide();
        $('.pa1620').hide();
    }else if(aite1620 == 2){
        console.log("パー")
        $('.gu1620').hide();
        $('.ch1620').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1620 == 0 &&  count >= 12748 && count<= 12789 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1620 == 1 && count >= 12748 && count<= 12789 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1620 == 2 && count >= 12748 && count<= 12789 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1620 == 0 && count >= 12748 && count<= 12789 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1620 == 1 && count >= 12748 && count<= 12789 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1620 == 2 && count >= 12748 && count<= 12789 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1620 == 0 && count >= 12748 && count<= 12789 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1620 == 1 && count >= 12748 && count<= 12789 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1620 == 2 && count >= 12748 && count<= 12789 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1630 = Math.floor(Math.random() *3);
    console.log(aite1630, "ランダムな手が出る");
    
    if(aite1630 == 0){
        console.log("グー")
        $('.ch1630').hide();
        $('.pa1630').hide();
            
    }else if(aite1630 == 1){
        console.log("チョキ")
        $('.gu1630').hide();
        $('.pa1630').hide();
    }else if(aite1630 == 2){
        console.log("パー")
        $('.gu1630').hide();
        $('.ch1630').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1630 == 0 &&  count >= 12821 && count<= 12871 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1630 == 1 && count >= 12821 && count<= 12871 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1630 == 2 && count >= 12821 && count<= 12871 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1630 == 0 && count >= 12821 && count<= 12871 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1630 == 1 && count >= 12821 && count<= 12871 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1630 == 2 && count >= 12821 && count<= 12871 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1630 == 0 && count >= 12821 && count<= 12871 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1630 == 1 && count >= 12821 && count<= 12871 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1630 == 2 && count >= 12821 && count<= 12871 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1640 = Math.floor(Math.random() *3);
    console.log(aite1640, "ランダムな手が出る");
    
    if(aite1640 == 0){
        console.log("グー")
        $('.ch1640').hide();
        $('.pa1640').hide();
            
    }else if(aite1640 == 1){
        console.log("チョキ")
        $('.gu1640').hide();
        $('.pa1640').hide();
    }else if(aite1640 == 2){
        console.log("パー")
        $('.gu1640').hide();
        $('.ch1640').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1640 == 0 &&  count >= 12900 && count<= 12950 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1640 == 1 && count >= 12900 && count<= 12950 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1640 == 2 && count >= 12900 && count<= 12950 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1640 == 0 && count >= 12900 && count<= 12950 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1640 == 1 && count >= 12900 && count<= 12950 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1640 == 2 && count >= 12900 && count<= 12950 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1640 == 0 && count >= 12900 && count<= 12950 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1640 == 1 && count >= 12900 && count<= 12950 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1640 == 2 && count >= 12900 && count<= 12950 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1650 = Math.floor(Math.random() *3);
    console.log(aite1650, "ランダムな手が出る");
    
    if(aite1650 == 0){
        console.log("グー")
        $('.ch1650').hide();
        $('.pa1650').hide();
            
    }else if(aite1650 == 1){
        console.log("チョキ")
        $('.gu1650').hide();
        $('.pa1650').hide();
    }else if(aite1650 == 2){
        console.log("パー")
        $('.gu1650').hide();
        $('.ch1650').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1650 == 0 &&  count >= 12980 && count<= 13030 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1650 == 1 && count >= 12980 && count<= 13030 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1650 == 2 && count >= 12980 && count<= 13030 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1650 == 0 && count >= 12980 && count<= 13030 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1650 == 1 && count >= 12980 && count<= 13030 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1650 == 2 && count >= 12980 && count<= 13030 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1650 == 0 && count >= 12980 && count<= 13030 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1650 == 1 && count >= 12980 && count<= 13030 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1650 == 2 && count >= 12980 && count<= 13030 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1660 = Math.floor(Math.random() *3);
    console.log(aite1660, "ランダムな手が出る");
    
    if(aite1660 == 0){
        console.log("グー")
        $('.ch1660').hide();
        $('.pa1660').hide();
            
    }else if(aite1660 == 1){
        console.log("チョキ")
        $('.gu1660').hide();
        $('.pa1660').hide();
    }else if(aite1660 == 2){
        console.log("パー")
        $('.gu1660').hide();
        $('.ch1660').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1660 == 0 &&  count >= 13031 && count<= 13074 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1660 == 1 && count >= 13031 && count<= 13074 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1660 == 2 && count >= 13031 && count<= 13074 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1660 == 0 && count >= 13031 && count<= 13074 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1660 == 1 && count >= 13031 && count<= 13074 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1660 == 2 && count >= 13031 && count<= 13074 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1660 == 0 && count >= 13031 && count<= 13074 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1660 == 1 && count >= 13031 && count<= 13074 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1660 == 2 && count >= 5130310 && count<= 13074 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1670 = Math.floor(Math.random() *3);
    console.log(aite1670, "ランダムな手が出る");
    
    if(aite1670 == 0){
        console.log("グー")
        $('.ch1670').hide();
        $('.pa1670').hide();
            
    }else if(aite1670 == 1){
        console.log("チョキ")
        $('.gu1670').hide();
        $('.pa1670').hide();
    }else if(aite1670 == 2){
        console.log("パー")
        $('.gu1670').hide();
        $('.ch1670').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1670 == 0 &&  count >= 13075 && count<= 13119 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1670 == 1 && count >= 13075 && count<= 13119 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1670 == 2 && count >= 13075 && count<= 13119 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1670 == 0 && count >= 13075 && count<= 13119 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1670 == 1 && count >= 13075 && count<= 13119 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1670 == 2 && count >= 13075 && count<= 13119 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1670 == 0 && count >= 13075 && count<= 13119 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1670 == 1 && count >= 13075 && count<= 13119 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1670 == 2 && count >= 13075 && count<= 13119 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1680 = Math.floor(Math.random() *3);
    console.log(aite1680, "ランダムな手が出る");
    
    if(aite1680 == 0){
        console.log("グー")
        $('.ch1680').hide();
        $('.pa1680').hide();
            
    }else if(aite1680 == 1){
        console.log("チョキ")
        $('.gu1680').hide();
        $('.pa1680').hide();
    }else if(aite1680 == 2){
        console.log("パー")
        $('.gu1680').hide();
        $('.ch1680').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1680 == 0 &&  count >= 13120 && count<= 13157 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1680 == 1 && count >= 13120 && count<= 13157 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1680 == 2 && count >= 13120 && count<= 13157 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1680 == 0 && count >= 13120 && count<= 13157 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1680 == 1 && count >= 13120 && count<= 13157 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1680 == 2 && count >= 13120 && count<= 13157 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1680 == 0 && count >= 13120 && count<= 13157 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1680 == 1 && count >= 13120 && count<= 13157 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1680 == 2 && count >= 13120 && count<= 13157 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1690 = Math.floor(Math.random() *3);
    console.log(aite1690, "ランダムな手が出る");
    
    if(aite1690 == 0){
        console.log("グー")
        $('.ch1690').hide();
        $('.pa1690').hide();
            
    }else if(aite1690 == 1){
        console.log("チョキ")
        $('.gu1690').hide();
        $('.pa1690').hide();
    }else if(aite1690 == 2){
        console.log("パー")
        $('.gu1690').hide();
        $('.ch1690').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1690 == 0 &&  count >= 13158 && count<= 13195 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1690 == 1 && count >= 13158 && count<= 13195 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1690 == 2 && count >= 13158 && count<= 13195 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1690 == 0 && count >= 13158 && count<= 13195 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1690 == 1 && count >= 13158 && count<= 13195 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1690 == 2 && count >= 13158 && count<= 13195 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1690 == 0 && count >= 13158 && count<= 13195 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1690 == 1 && count >= 13158 && count<= 13195 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1690 == 2 && count >= 13158 && count<= 13195 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1700 = Math.floor(Math.random() *3);
    console.log(aite1700, "ランダムな手が出る");
    
    if(aite1700 == 0){
        console.log("グー")
        $('.ch1700').hide();
        $('.pa1700').hide();
            
    }else if(aite1700 == 1){
        console.log("チョキ")
        $('.gu1700').hide();
        $('.pa1700').hide();
    }else if(aite1700 == 2){
        console.log("パー")
        $('.gu1700').hide();
        $('.ch1700').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1700 == 0 &&  count >= 13225 && count<= 13275 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1700 == 1 && count >= 13225 && count<= 13275 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1700 == 2 && count >= 13225 && count<= 13275 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1700 == 0 && count >= 13225 && count<= 13275 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1700 == 1 && count >= 13225 && count<= 13275 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1700 == 2 && count >= 13225 && count<= 13275 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1700 == 0 && count >= 13225 && count<= 13275 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1700 == 1 && count >= 13225 && count<= 13275 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1700 == 2 && count >= 13225 && count<= 13275 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1710 = Math.floor(Math.random() *3);
    console.log(aite1710, "ランダムな手が出る");
    
    if(aite1710 == 0){
        console.log("グー")
        $('.ch1710').hide();
        $('.pa1710').hide();
            
    }else if(aite1710 == 1){
        console.log("チョキ")
        $('.gu1710').hide();
        $('.pa1710').hide();
    }else if(aite1710 == 2){
        console.log("パー")
        $('.gu1710').hide();
        $('.ch1710').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1710 == 0 &&  count >= 13302 && count<= 13352 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1710 == 1 && count >= 13302 && count<= 13352 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1710 == 2 && count >= 13302 && count<= 13352 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1710 == 0 && count >= 13302 && count<= 13352 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1710 == 1 && count >= 13302 && count<= 13352 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1710 == 2 && count >= 13302 && count<= 13352 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1710 == 0 && count >= 13302 && count<= 13352 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1710 == 1 && count >= 13302 && count<= 13352 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1710 == 2 && count >= 13302 && count<= 13352 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1720 = Math.floor(Math.random() *3);
    console.log(aite1720, "ランダムな手が出る");
    
    if(aite1720 == 0){
        console.log("グー")
        $('.ch1720').hide();
        $('.pa1720').hide();
            
    }else if(aite1720 == 1){
        console.log("チョキ")
        $('.gu1720').hide();
        $('.pa1720').hide();
    }else if(aite1720 == 2){
        console.log("パー")
        $('.gu1720').hide();
        $('.ch1720').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1720 == 0 &&  count >= 13353 && count<= 13398 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1720 == 1 && count >= 13353 && count<= 13398 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1720 == 2 && count >= 13353 && count<= 13398 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1720 == 0 && count >= 13353 && count<= 13398 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1720 == 1 && count >= 13353 && count<= 13398 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1720 == 2 && count >= 13353 && count<= 13398 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1720 == 0 && count >= 13353 && count<= 13398 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1720 == 1 && count >= 13353 && count<= 13398 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1720 == 2 && count >= 13353 && count<= 13398 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1730 = Math.floor(Math.random() *3);
    console.log(aite1730, "ランダムな手が出る");
    
    if(aite1730 == 0){
        console.log("グー")
        $('.ch1730').hide();
        $('.pa1730').hide();
            
    }else if(aite1730 == 1){
        console.log("チョキ")
        $('.gu1730').hide();
        $('.pa1730').hide();
    }else if(aite1730 == 2){
        console.log("パー")
        $('.gu1730').hide();
        $('.ch1730').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1730 == 0 &&  count >= 13399 && count<= 13439 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1730 == 1 && count >= 13399 && count<= 13439 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1730 == 2 && count >= 13399 && count<= 13439 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1730 == 0 && count >= 13399 && count<= 13439 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1730 == 1 && count >= 13399 && count<= 13439 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1730 == 2 && count >= 13399 && count<= 13439 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1730 == 0 && count >= 13399 && count<= 13439 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1730 == 1 && count >= 13399 && count<= 13439 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1730 == 2 && count >= 13399 && count<= 13439 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1740 = Math.floor(Math.random() *3);
    console.log(aite1740, "ランダムな手が出る");
    
    if(aite1740 == 0){
        console.log("グー")
        $('.ch1740').hide();
        $('.pa1740').hide();
            
    }else if(aite1740 == 1){
        console.log("チョキ")
        $('.gu1740').hide();
        $('.pa1740').hide();
    }else if(aite1740 == 2){
        console.log("パー")
        $('.gu1740').hide();
        $('.ch1740').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1740 == 0 &&  count >= 13440 && count<= 13479 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1740 == 1 && count >= 13440 && count<= 13479 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1740 == 2 && count >= 13440 && count<= 13479 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1740 == 0 && count >= 13440 && count<= 13479 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1740 == 1 && count >= 13440 && count<= 13479 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1740 == 2 && count >= 13440 && count<= 13479 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1740 == 0 && count >= 13440 && count<= 13479 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1740 == 1 && count >= 13440 && count<= 13479 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1740 == 2 && count >= 13440 && count<= 13479 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1750 = Math.floor(Math.random() *3);
    console.log(aite1750, "ランダムな手が出る");
    
    if(aite1750 == 0){
        console.log("グー")
        $('.ch1750').hide();
        $('.pa1750').hide();
            
    }else if(aite1750 == 1){
        console.log("チョキ")
        $('.gu1750').hide();
        $('.pa1750').hide();
    }else if(aite1750 == 2){
        console.log("パー")
        $('.gu1750').hide();
        $('.ch1750').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1750 == 0 &&  count >= 13480 && count<= 13517 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1750 == 1 && count >= 13480 && count<= 13517 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1750 == 2 && count >= 13480 && count<= 13517 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1750 == 0 && count >= 13480 && count<= 13517 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1750 == 1 && count >= 13480 && count<= 13517 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1750 == 2 && count >= 13480 && count<= 13517 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1750 == 0 && count >= 13480 && count<= 13517 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1750 == 1 && count >= 13480 && count<= 13517 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1750 == 2 && count >= 13480 && count<= 13517 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1760 = Math.floor(Math.random() *3);
    console.log(aite1760, "ランダムな手が出る");
    
    if(aite1760 == 0){
        console.log("グー")
        $('.ch1760').hide();
        $('.pa1760').hide();
            
    }else if(aite1760 == 1){
        console.log("チョキ")
        $('.gu1760').hide();
        $('.pa1760').hide();
    }else if(aite1760 == 2){
        console.log("パー")
        $('.gu1760').hide();
        $('.ch1760').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1760 == 0 &&  count >= 13548 && count<= 13598 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1760 == 1 && count >= 13548 && count<= 13598 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1760 == 2 && count >= 13548 && count<= 13598 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1760 == 0 && count >= 13548 && count<= 13598 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1760 == 1 && count >= 13548 && count<= 13598 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1760 == 2 && count >= 13548 && count<= 13598 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1760 == 0 && count >= 13548 && count<= 13598 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1760 == 1 && count >= 13548 && count<= 13598 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1760 == 2 && count >= 13548 && count<= 13598 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1770 = Math.floor(Math.random() *3);
    console.log(aite1770, "ランダムな手が出る");
    
    if(aite1770 == 0){
        console.log("グー")
        $('.ch1770').hide();
        $('.pa1770').hide();
            
    }else if(aite1770 == 1){
        console.log("チョキ")
        $('.gu1770').hide();
        $('.pa1770').hide();
    }else if(aite1770 == 2){
        console.log("パー")
        $('.gu1770').hide();
        $('.ch1770').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1770 == 0 &&  count >= 13627 && count<= 13677 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1770 == 1 && count >= 13627 && count<= 13677 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1770 == 2 && count >= 13627 && count<= 13677 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1770 == 0 && count >= 13627 && count<= 13677 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1770 == 1 && count >= 13627 && count<= 13677 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1770 == 2 && count >= 13627 && count<= 13677 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1770 == 0 && count >= 13627 && count<= 13677 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1770 == 1 && count >= 13627 && count<= 13677 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1770 == 2 && count >= 13627 && count<= 13677 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1780 = Math.floor(Math.random() *3);
    console.log(aite1780, "ランダムな手が出る");
    
    if(aite1780 == 0){
        console.log("グー")
        $('.ch1780').hide();
        $('.pa1780').hide();
            
    }else if(aite1780 == 1){
        console.log("チョキ")
        $('.gu1780').hide();
        $('.pa1780').hide();
    }else if(aite1780 == 2){
        console.log("パー")
        $('.gu1780').hide();
        $('.ch1780').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1780 == 0 &&  count >= 13704 && count<= 13754 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1780 == 1 && count >= 13704 && count<= 13754 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1780 == 2 && count >= 13704 && count<= 13754 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1780 == 0 && count >= 13704 && count<= 13754 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1780 == 1 && count >= 13704 && count<= 13754 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1780 == 2 && count >= 13704 && count<= 13754 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1780 == 0 && count >= 13704 && count<= 13754 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1780 == 1 && count >= 13704 && count<= 13754 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1780 == 2 && count >= 13704 && count<= 13754 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1790 = Math.floor(Math.random() *3);
    console.log(aite1790, "ランダムな手が出る");
    
    if(aite1790 == 0){
        console.log("グー")
        $('.ch1790').hide();
        $('.pa1790').hide();
            
    }else if(aite1790 == 1){
        console.log("チョキ")
        $('.gu1790').hide();
        $('.pa1790').hide();
    }else if(aite1790 == 2){
        console.log("パー")
        $('.gu1790').hide();
        $('.ch1790').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1790 == 0 &&  count >= 13779 && count<= 13829 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1790 == 1 && count >= 13779 && count<= 13829 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1790 == 2 && count >= 13779 && count<= 13829 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1790 == 0 && count >= 13779 && count<= 13829 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1790 == 1 && count >= 13779 && count<= 13829 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1790 == 2 && count >= 13779 && count<= 13829 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1790 == 0 && count >= 13779 && count<= 13829 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1790 == 1 && count >= 13779 && count<= 13829 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1790 == 2 && count >= 13779 && count<= 13829 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1800 = Math.floor(Math.random() *3);
    console.log(aite1800, "ランダムな手が出る");
    
    if(aite1800 == 0){
        console.log("グー")
        $('.ch1800').hide();
        $('.pa1800').hide();
            
    }else if(aite1800 == 1){
        console.log("チョキ")
        $('.gu1800').hide();
        $('.pa1800').hide();
    }else if(aite1800 == 2){
        console.log("パー")
        $('.gu1800').hide();
        $('.ch1800').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1800 == 0 &&  count >= 13870 && count<= 13920 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1800 == 1 && count >= 13870 && count<= 13920 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1800 == 2 && count >= 13870 && count<= 13920 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1800 == 0 && count >= 13870 && count<= 13920 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1800 == 1 && count >= 13870 && count<= 13920 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1800 == 2 && count >= 13870 && count<= 13920 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1800 == 0 && count >= 13870 && count<= 13920 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1800 == 1 && count >= 13870 && count<= 13920 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1800 == 2 && count >= 13870 && count<= 13920 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1810 = Math.floor(Math.random() *3);
    console.log(aite1810, "ランダムな手が出る");
    
    if(aite1810 == 0){
        console.log("グー")
        $('.ch1810').hide();
        $('.pa1810').hide();
            
    }else if(aite1810 == 1){
        console.log("チョキ")
        $('.gu1810').hide();
        $('.pa1810').hide();
    }else if(aite1810 == 2){
        console.log("パー")
        $('.gu1810').hide();
        $('.ch1810').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1810 == 0 &&  count >= 13948 && count<= 13998 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1810 == 1 && count >= 13948 && count<= 13998 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1810 == 2 && count >= 13948 && count<= 13998 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1810 == 0 && count >= 13948 && count<= 13998 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1810 == 1 && count >= 13948 && count<= 13998 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1810 == 2 && count >= 13948 && count<= 13998 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1810 == 0 && count >= 13948 && count<= 13998 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1810 == 1 && count >= 13948 && count<= 13998 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1810 == 2 && count >= 13948 && count<= 13998 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1820 = Math.floor(Math.random() *3);
    console.log(aite1820, "ランダムな手が出る");
    
    if(aite1820 == 0){
        console.log("グー")
        $('.ch1820').hide();
        $('.pa1820').hide();
            
    }else if(aite1820 == 1){
        console.log("チョキ")
        $('.gu1820').hide();
        $('.pa1820').hide();
    }else if(aite1820 == 2){
        console.log("パー")
        $('.gu1820').hide();
        $('.ch1820').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1820 == 0 &&  count >= 13999 && count<= 14035 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1820 == 1 && count >= 13999 && count<= 14035 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1820 == 2 && count >= 13999 && count<= 14035 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1820 == 0 && count >= 13999 && count<= 14035 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1820 == 1 && count >= 13999 && count<= 14035 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1820 == 2 && count >= 13999 && count<= 14035 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1820 == 0 && count >= 13999 && count<= 14035 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1820 == 1 && count >= 13999 && count<= 14035 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1820 == 2 && count >= 13999 && count<= 14035 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1830 = Math.floor(Math.random() *3);
    console.log(aite1830, "ランダムな手が出る");
    
    if(aite1830 == 0){
        console.log("グー")
        $('.ch1830').hide();
        $('.pa1830').hide();
            
    }else if(aite1830 == 1){
        console.log("チョキ")
        $('.gu1830').hide();
        $('.pa1830').hide();
    }else if(aite1830 == 2){
        console.log("パー")
        $('.gu1830').hide();
        $('.ch1830').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1830 == 0 &&  count >= 14036 && count<= 14075 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1830 == 1 && count >= 14036 && count<= 14075 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1830 == 2 && count >= 14036 && count<= 14075 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1830 == 0 && count >= 14036 && count<= 14075 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1830 == 1 && count >= 14036 && count<= 14075 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1830 == 2 && count >= 14036 && count<= 14075 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1830 == 0 && count >= 14036 && count<= 14075 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1830 == 1 && count >= 14036 && count<= 14075 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1830 == 2 && count >= 14036 && count<= 14075 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1840 = Math.floor(Math.random() *3);
    console.log(aite1840, "ランダムな手が出る");
    
    if(aite1840 == 0){
        console.log("グー")
        $('.ch1840').hide();
        $('.pa1840').hide();
            
    }else if(aite1840 == 1){
        console.log("チョキ")
        $('.gu1840').hide();
        $('.pa1840').hide();
    }else if(aite1840 == 2){
        console.log("パー")
        $('.gu1840').hide();
        $('.ch1840').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1840 == 0 &&  count >= 14104 && count<= 60 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1840 == 1 && count >= 14104 && count<= 60 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1840 == 2 && count >= 14104 && count<= 60 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1840 == 0 && count >= 14104 && count<= 14154 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1840 == 1 && count >= 14104 && count<= 14154 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1840 == 2 && count >= 14104 && count<= 14154 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1840 == 0 && count >= 14104 && count<= 14154 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1840 == 1 && count >= 14104 && count<= 14154 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1840 == 2 && count >= 14104 && count<= 14154 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1850 = Math.floor(Math.random() *3);
    console.log(aite1850, "ランダムな手が出る");
    
    if(aite1850 == 0){
        console.log("グー")
        $('.ch1850').hide();
        $('.pa1850').hide();
            
    }else if(aite1850 == 1){
        console.log("チョキ")
        $('.gu1850').hide();
        $('.pa1850').hide();
    }else if(aite1850 == 2){
        console.log("パー")
        $('.gu1850').hide();
        $('.ch1850').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1850 == 0 &&  count >= 14184 && count<= 14234 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1850 == 1 && count >= 14184 && count<= 14234 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1850 == 2 && count >= 14184 && count<= 14234 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1850 == 0 && count >= 14184 && count<= 14234 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1850 == 1 && count >= 14184 && count<= 14234 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1850 == 2 && count >= 14184 && count<= 14234 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1850 == 0 && count >= 14184 && count<= 14234 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1850 == 1 && count >= 14184 && count<= 14234 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1850 == 2 && count >= 14184 && count<= 14234 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1860 = Math.floor(Math.random() *3);
    console.log(aite1860, "ランダムな手が出る");
    
    if(aite1860 == 0){
        console.log("グー")
        $('.ch1860').hide();
        $('.pa1860').hide();
            
    }else if(aite1860 == 1){
        console.log("チョキ")
        $('.gu1860').hide();
        $('.pa1860').hide();
    }else if(aite1860 == 2){
        console.log("パー")
        $('.gu1860').hide();
        $('.ch1860').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1860 == 0 &&  count >= 14350 && count<= 14400 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1860 == 1 && count >= 14350 && count<= 14400 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1860 == 2 && count >= 14350 && count<= 14400 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1860 == 0 && count >= 14350 && count<= 14400 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1860 == 1 && count >= 14350 && count<= 14400 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1860 == 2 && count >= 14350 && count<= 14400 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1860 == 0 && count >= 14350 && count<= 14400 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1860 == 1 && count >= 14350 && count<= 14400 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1860 == 2 && count >= 14350 && count<= 14400 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1870 = Math.floor(Math.random() *3);
    console.log(aite1870, "ランダムな手が出る");
    
    if(aite1870 == 0){
        console.log("グー")
        $('.ch1870').hide();
        $('.pa1870').hide();
            
    }else if(aite1870 == 1){
        console.log("チョキ")
        $('.gu1870').hide();
        $('.pa1870').hide();
    }else if(aite1870 == 2){
        console.log("パー")
        $('.gu1870').hide();
        $('.ch1870').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1870 == 0 &&  count >= 14510 && count<= 14560 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1870 == 1 && count >= 14510 && count<= 14560 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1870 == 2 && count >= 14510 && count<= 14560 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1870 == 0 && count >= 14510 && count<= 14560 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1870 == 1 && count >= 14510 && count<= 14560 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1870 == 2 && count >= 14510 && count<= 14560 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1870 == 0 && count >= 14510 && count<= 14560 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1870 == 1 && count >= 14510 && count<= 14560 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1870 == 2 && count >= 14510 && count<= 14560 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1880 = Math.floor(Math.random() *3);
    console.log(aite1880, "ランダムな手が出る");
    
    if(aite1880 == 0){
        console.log("グー")
        $('.ch1880').hide();
        $('.pa1880').hide();
            
    }else if(aite1880 == 1){
        console.log("チョキ")
        $('.gu1880').hide();
        $('.pa1880').hide();
    }else if(aite1880 == 2){
        console.log("パー")
        $('.gu1880').hide();
        $('.ch1880').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1880 == 0 &&  count >= 14675 && count<= 60 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1880 == 1 && count >= 14675 && count<= 60 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1880 == 2 && count >= 14675 && count<= 60 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1880 == 0 && count >= 14675 && count<= 14725 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1880 == 1 && count >= 14675 && count<= 14725 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1880 == 2 && count >= 14675 && count<= 14725 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1880 == 0 && count >= 14675 && count<= 14725 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1880 == 1 && count >= 14675 && count<= 14725 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1880 == 2 && count >= 14675 && count<= 14725 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1890 = Math.floor(Math.random() *3);
    console.log(aite1890, "ランダムな手が出る");
    
    if(aite1890 == 0){
        console.log("グー")
        $('.ch1890').hide();
        $('.pa1890').hide();
            
    }else if(aite1890 == 1){
        console.log("チョキ")
        $('.gu1890').hide();
        $('.pa1890').hide();
    }else if(aite1890 == 2){
        console.log("パー")
        $('.gu1890').hide();
        $('.ch1890').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1890 == 0 &&  count >= 14840 && count<= 14890 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1890 == 1 && count >= 14840 && count<= 14890 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1890 == 2 && count >= 14840 && count<= 14890 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1890 == 0 && count >= 14840 && count<= 14890 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1890 == 1 && count >= 14840 && count<= 14890 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1890 == 2 && count >= 14840 && count<= 14890 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1890 == 0 && count >= 14840 && count<= 14890 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1890 == 1 && count >= 14840 && count<= 14890 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1890 == 2 && count >= 14840 && count<= 14890 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1900 = Math.floor(Math.random() *3);
    console.log(aite1900, "ランダムな手が出る");
    
    if(aite1900 == 0){
        console.log("グー")
        $('.ch1900').hide();
        $('.pa1900').hide();
            
    }else if(aite1900 == 1){
        console.log("チョキ")
        $('.gu1900').hide();
        $('.pa1900').hide();
    }else if(aite1900 == 2){
        console.log("パー")
        $('.gu1900').hide();
        $('.ch1900').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1900 == 0 &&  count >= 14912 && count<= 14962 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1900 == 1 && count >= 14912 && count<= 14962 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1900 == 2 && count >= 14912 && count<= 14962 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1900 == 0 && count >= 14912 && count<= 14962 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1900 == 1 && count >= 14912 && count<= 14962 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1900 == 2 && count >= 14912 && count<= 14962 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1900 == 0 && count >= 14912 && count<= 14962 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1900 == 1 && count >= 14912 && count<= 14962 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1900 == 2 && count >= 14912 && count<= 14962 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1910 = Math.floor(Math.random() *3);
    console.log(aite1910, "ランダムな手が出る");
    
    if(aite1910 == 0){
        console.log("グー")
        $('.ch1910').hide();
        $('.pa1910').hide();
            
    }else if(aite1910 == 1){
        console.log("チョキ")
        $('.gu1910').hide();
        $('.pa1910').hide();
    }else if(aite1910 == 2){
        console.log("パー")
        $('.gu1910').hide();
        $('.ch1910').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1910 == 0 &&  count >= 14993 && count<= 15043 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1910 == 1 && count >= 14993 && count<= 15043 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1910 == 2 && count >= 14993 && count<= 15043 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1910 == 0 && count >= 14993 && count<= 15043 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1910 == 1 && count >= 14993 && count<= 15043 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1910 == 2 && count >= 14993 && count<= 15043 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1910 == 0 && count >= 14993 && count<= 15043 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1910 == 1 && count >= 14993 && count<= 15043 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1910 == 2 && count >= 14993 && count<= 15043 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1920 = Math.floor(Math.random() *3);
    console.log(aite1920, "ランダムな手が出る");
    
    if(aite1920 == 0){
        console.log("グー")
        $('.ch1920').hide();
        $('.pa1920').hide();
            
    }else if(aite1920 == 1){
        console.log("チョキ")
        $('.gu1920').hide();
        $('.pa1920').hide();
    }else if(aite1920 == 2){
        console.log("パー")
        $('.gu1920').hide();
        $('.ch1920').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1920 == 0 &&  count >= 15075 && count<= 15125 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1920 == 1 && count >= 15075 && count<= 15125 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1920 == 2 && count >= 15075 && count<= 15125 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1920 == 0 && count >= 15075 && count<= 15125 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1920 == 1 && count >= 15075 && count<= 15125 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1920 == 2 && count >= 15075 && count<= 15125 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1920 == 0 && count >= 15075 && count<= 15125 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1920 == 1 && count >= 15075 && count<= 15125 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1920 == 2 && count >= 15075 && count<= 15125 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1930 = Math.floor(Math.random() *3);
    console.log(aite1930, "ランダムな手が出る");
    
    if(aite1930 == 0){
        console.log("グー")
        $('.ch1930').hide();
        $('.pa1930').hide();
            
    }else if(aite1930 == 1){
        console.log("チョキ")
        $('.gu1930').hide();
        $('.pa1930').hide();
    }else if(aite1930 == 2){
        console.log("パー")
        $('.gu1930').hide();
        $('.ch1930').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1930 == 0 &&  count >= 15166 && count<= 15216 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1930 == 1 && count >= 15166 && count<= 15216 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1930 == 2 && count >= 15166 && count<= 15216 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1930 == 0 && count >= 15166 && count<= 15216 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1930 == 1 && count >= 15166 && count<= 15216 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1930 == 2 && count >= 15166 && count<= 15216 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1930 == 0 && count >= 15166 && count<= 15216 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1930 == 1 && count >= 15166 && count<= 15216 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1930 == 2 && count >= 15166 && count<= 15216 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    var aite1940 = Math.floor(Math.random() *3);
    console.log(aite1940, "ランダムな手が出る");
    
    if(aite1940 == 0){
        console.log("グー")
        $('.ch1940').hide();
        $('.pa1940').hide();
            
    }else if(aite1940 == 1){
        console.log("チョキ")
        $('.gu1940').hide();
        $('.pa1940').hide();
    }else if(aite1940 == 2){
        console.log("パー")
        $('.gu1940').hide();
        $('.ch1940').hide();
    }
    
    
    
    document.addEventListener('keydown', function(event) {
    if(aite1940 == 0 &&  count >= 15217 && count<= 60 && event.code == 'KeyG'){
        console.log('あいこ'); score += 100; getScore();
    }else if(aite1940 == 1 && count >= 15217 && count<= 60 && event.code == 'KeyG'){
        console.log('かち'); score += 200; getScore();
    }else if(aite1940 == 2 && count >= 15217 && count<= 60 && event.code == 'KeyG'){
        console.log('まけ'); score -= 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1940 == 0 && count >= 15217 && count<= 15251 && event.code == 'KeyT'){
            console.log('まけ'); score -= 200; getScore();
    }else if(aite1940 == 1 && count >= 15217 && count<= 15251 && event.code == 'KeyT'){
            console.log('あいこ'); score += 100; getScore();
     }else if(aite1940 == 2 && count >= 15217 && count<= 15251 && event.code == 'KeyT'){
            console.log('かち'); score += 200; getScore();
    }
    });
    
    document.addEventListener('keydown', function(event) {
    if(aite1940 == 0 && count >= 15217 && count<= 15251 && event.code == 'KeyP'){
                console.log('かち'); score += 200; getScore();
    }else if(aite1940 == 1 && count >= 15217 && count<= 15251 && event.code == 'KeyP'){
                console.log('まけ'); score -= 200; getScore();
    }else if(aite1940 == 2 && count >= 15217 && count<= 15251 && event.code == 'KeyP'){
                console.log('あいこ'); score += 100; getScore();
    }
    });
    
    
    
 




});



$(function() {
    // 最初は.kakusuを非表示にしておく
    $(".kakusu").hide();

    $(".hajimeru").on("click", function () {
        // .startを非表示
         $(".hajimeru").fadeOut(1000);

        // .kakusuを表示
        $(".kakusu").fadeIn();

    

})
});

function sound()
{
    // [ID:sound-file]の音声ファイルを再生[play()]する
    document.getElementById( 'sound' ).play() ;
}