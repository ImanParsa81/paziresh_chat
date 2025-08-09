
jQuery(document).ready(function ($) {

// باز شدن منوی همبرگری برای مشاهده chat های دیگر

    // open

    $(".show_ather_chat svg").click(function () {
        $(".menu_show_cart_pv").addClass("show");
        $(".screen_black").addClass("active");
    })

    // close

    $(".menu_show_cart_pv").on("click",".chat-item",function (e) {
        $(".menu_show_cart_pv").removeClass("show");
        $(".screen_black").removeClass("active");
    })

    $(".chat-list .chat-item").click(function (e) {
        $(".menu_show_cart_pv").removeClass("show");
        $(".screen_black").removeClass("active");
    })

// دکتر وقتی که پیام ارسال میکنه

    // نوشتن پیام

    $(".send-button").on("click", function (e) {
        send_message();
    });


    $('.message-input').on('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send_message();
        }
    });
    
    
    function send_message () {

        let Error = false;
        let pv_focus = $(".chat-header").attr("id_pv");
        let text = $(".message-input").val();
        // بررسی خالی بودن
        if (!pv_focus || !text.trim()) {
            Error = true;
        }
        if ( Error != true ) {
            create_messahe(text , pv_focus);
            $(".message-input").val("");
        }
        $(".message-input").css("height", "40px");

    }


    // ساخت message و انتقال به پایین

    function create_messahe ( message , pv_focus ) {


        // اضافه کردن پیام جدید به دسته

        let class_new_message_hiden = "";
        array_user_pv = JSON.parse( sessionStorage.getItem('array_user_pv') );

        console.log(array_user_pv)

        array_user_pv.forEach( function ( Item_ , Key_ ) {
            if ( Item_.id == pv_focus ) {

                class_new_message_hiden = "hiden_"+Item_.messages.length;

                Item_.messages.push({
                    message_id: class_new_message_hiden,
                    text: message,
                    timestamp: Date.now().toString(),
                    new_or_old: true,
                    role: "Fixer"
                });
            }
        })
        sessionStorage.setItem('array_user_pv' , JSON.stringify(array_user_pv) )


        //  append message

        let Message__ = `<div class="${class_new_message_hiden} dont_Sin message sent">
                                    <div class="message-bubble">
                                        ${message}
                                    </div>
                                </div>`;
        $(".messages-container").append( Message__ );
        let container = document.querySelector('.messages-container');
        container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth"
        });


        // صدا زدن api

        save_message_to_data_base( message , pv_focus , class_new_message_hiden );


    }

    // ارسال پیام جدید به سرور برای سیو شدن آن در دیتابیس

    function save_message_to_data_base (  message , pv_focus , class_new_message_hiden ) {

        let get_id_client = sessionStorage.getItem('id_client' );

        callApi(
            'https://n8n.nirweb.ir/webhook/get_message_doctor',
            'POST',
            {
                message: message ,
                pv_focus: pv_focus ,
                class_new_message_hiden: class_new_message_hiden,
                get_id_client: get_id_client,
                timestamp_: Date.now().toString(),
            }
        )
        .then( data => sin_message(data) )
        .catch(err => console.error(err));
    }

    // تغییر حالت پیام به سین شده
    function sin_message (data) {
        $(`.${data.id_chat}`).removeClass(`dont_Sin`);
    }

// -----------------------------------------------------------
// دکتر وقتی که پیام ارسال میکنه

    // OPEN

    // $(".messages-container").on("click",".container_image_message img", function () {
    //     let get_url_image = $(this).attr("src");
    //     $(".container_show_image").addClass("active");
    //     $(" .container_show_image img").attr("src", get_url_image);
    // })
    //
    //
    // var $img = $('.container_image .main_image');
    // var $loader = $('.container_image .loader');
    //
    // $img.on('load', function () {
    //     $loader.hide();
    //     $img.fadeIn(200); // نرمی برای نمایش عکس
    // });



    $(".messages-container").on("click", ".container_image_message img", function () {
        let get_url_image = $(this).attr("src");
        $(".container_show_image").addClass("active");

        // متغیرها رو تعریف می‌کنیم (درست مثل قبل)
        var $img = $(".container_show_image .main_image");
        var $loader = $(".container_show_image .loader");

        // عکس رو مخفی کن و لودر رو نشون بده:
        $img.hide();
        $loader.show();

        // حالا سورس عکس رو تغییر بده:
        $img.attr("src", get_url_image);
    });

// فقط یکبار لازم داری این رو ست کنی (بارگزاری اولیه)
    var $img = $(".container_show_image .main_image");
    var $loader = $(".container_show_image .loader");

    $img.on('load', function () {
        $loader.hide();
        $img.fadeIn(200);
    });


    // CLOSE

    $(".container_image svg").on("click", function () {
        $(".container_show_image").removeClass("active");
    })

    $(".container_show_image").on("click", function (e) {
        if ( this === e.target ) {
            $(".container_show_image").removeClass("active");
        }
    })




})





