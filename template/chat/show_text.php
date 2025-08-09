<?php
    include "./template/chat/show_text/header_pv.php";
    include "./template/chat/show_text/message.php";
    include "./template/chat/show_text/show_image.php";
?>

<div class="chat-area">

    <?php
//        func_header_pv( "f" , "علی پارسا" );
        func_header_pv( "" , "" );
    ?>

    <div class="messages-container" id="messagesContainer">

        <?php
//            show_image("");
//            show_image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnb3288Ih_3BYFuAdq1_eMWEVGN8TQliJKeIEeVn9XmCtXj5CCSte1fv5EwjJMnSu2hE&usqp=CAU");
//            show_image("https://ircdn.zhaket.com/resources/5dc9cc00eaec370009202762/6721fa4356fd1054660d82a2.png");
//            func_message( "received" , "سلام، حالت چطوره؟" , "20:30" );
//            func_message( "send" , "سلام، حالت چطوره؟" , "20:30" );
//            func_message( "received" , "سلام، حالت چطوره؟" , "20:30" );
//            func_message( "send" , "سلام، حالت چطوره؟" , "20:30" );
        ?>

    </div>

    <div class="input-area">

        <button class="send-button" id="sendButton">
            ➤
        </button>
        <textarea class="message-input" id="messageInput" placeholder="پیام خود را بنویسید..." rows="1"></textarea>

    </div>

</div>



<!------------------------------------------------>
<!-- نمایش گالری -->

<div class="container_show_image"> <!-- active -->

    <div class="container_image">

        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="184.145" y="146.377" width="456.521" height="507.246" fill="white"/>
            <path d="M399.999 44.6665C477.944 44.6665 538.617 44.6195 585.81 50.9644C633.634 57.3942 670.896 70.749 700.071 99.9253C729.249 129.102 742.604 166.365 749.034 214.19C755.379 261.382 755.333 322.054 755.333 400C755.333 477.944 755.379 538.618 749.034 585.81C742.604 633.635 729.249 670.896 700.072 700.072C670.897 729.249 633.635 742.605 585.81 749.035C538.617 755.38 477.944 755.333 399.999 755.333C322.054 755.333 261.382 755.38 214.189 749.035C166.364 742.605 129.101 729.25 99.9248 700.073V700.072C70.7485 670.896 57.3937 633.634 50.9639 585.81C44.619 538.618 44.666 477.944 44.666 400C44.666 322.054 44.6191 261.382 50.9639 214.19C57.3938 166.365 70.749 129.102 99.9258 99.9253C129.102 70.7489 166.365 57.3943 214.189 50.9644C261.382 44.6195 322.054 44.6665 399.999 44.6665ZM318.786 314.544C317.615 313.374 315.715 313.374 314.544 314.545C313.372 315.717 313.373 317.616 314.543 318.786L314.544 318.787L380.199 384.444L395.755 400L380.199 415.556L314.545 481.212C313.373 482.384 313.373 484.282 314.545 485.454C315.717 486.625 317.615 486.624 318.785 485.455L318.787 485.453L384.443 419.799L400 404.245L481.209 485.454C482.381 486.625 484.281 486.625 485.453 485.454C486.626 484.28 486.623 482.382 485.456 481.215L485.453 481.212L419.796 415.556L404.24 400L485.454 318.786C486.623 317.617 486.625 315.719 485.453 314.546C484.281 313.375 482.381 313.375 481.209 314.546L481.208 314.545L415.556 380.203L400 395.759L384.442 380.203L318.786 314.545V314.544Z" fill="#FF0000" stroke="white" stroke-width="44"/>
        </svg>

        <div class="loader" style="
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);
            display: block;
        ">در حال بارگذاری عکس ...</div>

        <img class="main_image" src="  ">

    </div>

</div>









