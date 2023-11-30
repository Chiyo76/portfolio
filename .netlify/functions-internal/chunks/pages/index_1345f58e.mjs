/* empty css                           */
function render$4({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ch1yo's coffee</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    <style>
        /* 動畫部分 */
        #portfolio a:hover figcaption {
            transform: translateY(0);
        }

    </style>
</head>

<body>
    <!-- 主選單 -->
    <nav class="flex bg-slate-900 h-[70px] items-center fixed w-full z-[999]">
        <a href="/" class="text-slate-100 hover:scale-110 text-4xl font-bold px-4">Home</a>
        <div class="space-x-1 lg:space-x-4 ml-6">
            <a href="#about" class="text-slate-100 hover:text-amber-100 hover:font-bold hover:underline=true">關於</a>
            <a href="#portfolio" class="text-slate-100 hover:text-amber-100 hover:font-bold ">品項</a>
            <a href="#service" class="text-slate-100 hover:text-amber-100 hover:font-bold ">其他飲品</a>
            <a href="#contact" class="text-slate-100 hover:text-amber-100 hover:font-bold ">聯絡我</a>
        </div>
        <div class="space-x-4 ml-auto mr-3">
            <a href="#" class="text-slate-100 hover:scale-110">
                <i class="fa-solid fa-magnifying-glass hover:scale-110"></i>
            </a>
            <a href="#" class="text-slate-100 hover:scale-110">
                <i class="fa-solid fa-user hover:scale-110"></i></a>
        </div>
    </nav>

    <div class="h-[70px]"></div>

    <header class="relative aspect-[21/9] lg:w-3/4 mx-auto">
        <!-- 設定相對定位,整個比例(如果有flex就只能設在圖片) -->
        <img src="/images/Ch1yoCoffee/1.jpg" alt="" class="w-full h-full object-cover opacity-50">
        <div class="absolute bg-white/20 inset-0 m-auto sm:w-1/2 w-5/12 h-fit text-center space-y-4 p-3 rounded-xl "
            data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
            <h1 class="sm:text-6xl text-3xl font-bold">Welcome to <br>Ch1yo's coffee</h1>
            <P class="sm:block hidden underline decoration-solid italic">致力於打造最舒適的客戶體驗</P>
            <a href="#about" class="inline-block px-6 py-1 bg-amber-400 rounded-lg hover:scale-110">more</a>
        </div>
    </header>

    <!-- 關於 -->
    <h2 class="text-4xl font-black py-10 text-center">關於我們</h2>
    <div class="swiper lg:w-3/4 mx-auto" data-aos="zoom-in"
    data-aos-anchor-placement="center-bottom" data-aos-delay="100">
        <section class="h-[600px] swiper-wrapper" id="about" >
            <div class="bg-amber-100 lg:w-[900px] w-10/12 h-full  mx-auto flex flex-wrap items-center swiper-slide">
                <div class="lg:w-1/3 sm:w-1/2 w-full p-10 aspect-[16/9]">
                    <div class="rounded-full overflow-hidden aspect-[1/1]">
                        <img src="/images/Ch1yoCoffee/4.jpg" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-2/3 sm:w-1/2 w-full sm:pl-8 text-center sm:text-left">
                    <h2 class="text-3xl font-bold mb-2 border divide-yellow-400  w-fit">使用精選新鮮咖啡豆</h2>
                    <div class="text-xl mt-4">各種不同烘焙度可選擇</div>
                    <p class="leading-8 underline decoration-solid italic ">從淺焙豆到深焙豆，花香、果香、焦糖香一次滿足</p>
                </div>
            </div>
            <div class="lg:w-[900px] w-10/12 items-center swiper-slide">
                <div class="sm:aspect-[16/9] aspect-[1/1]">
                    <img src="/images/Ch1yoCoffee/p10.jpg" alt="" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="lg:w-[900px] w-10/12 items-center swiper-slide">
                <div class="sm:aspect-[16/9] aspect-[1/1]">
                    <img src="/images/Ch1yoCoffee/11.jpg" alt="" class="w-full h-full object-cover">
                </div>
            </div>
            
        </section>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
    </div>
    
    <!-- 圖片牆 -->
    <section id="portfolio" class="bg-amber-50 relative z-50 lg:w-3/4 mx-auto">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-1/3">
                <a href="/images/Ch1yoCoffee/p9.jpg" class="block">
                    <figure class="relative overflow-hidden aspect-[3/4]" data-aos="zoom-in"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                        <img src="/images/Ch1yoCoffee/p9.jpg" alt="" class="object-cover">
                        <figcaption
                            class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                            悠閒的環境</figcaption>
                    </figure>
                </a>
            </div>
            <div class="flex flex-wrap xl:w-2/3">
                <div class="xl:w-1/6,h-1/2, lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
                    <a href="/images/Ch1yoCoffee/p1.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p1.jpg" alt="" class="object-contain">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                讀本書吧!</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
                    <a href="/images/Ch1yoCoffee/p2.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p2.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                冰拿鐵</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
                    <a href="/images/Ch1yoCoffee/p3.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p3.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                濃縮咖啡</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="400">
                    <a href="/images/Ch1yoCoffee/p4.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p4.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                巧克力布郎尼</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="100">
                    <a href="/images/Ch1yoCoffee/p5.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p5.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                特色咖啡</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="200">
                    <a href="/images/Ch1yoCoffee/p6.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p6.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                來個糕點吧!</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="300">
                    <a href="/images/Ch1yoCoffee/p7.jpg" class="block">

                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p7.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                來個糕點吧!</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="400">
                    <a href="/images/Ch1yoCoffee/p8.jpg" class="block">

                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/Ch1yoCoffee/p8.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                朋友聚餐</figcaption>
                        </figure>
                    </a>
                </div>

            </div>
        </div>
    </section>
    <!-- 其他飲品 -->
    <section class="py-20 lg:w-3/4 mx-auto" id="service">
        <h2 class="text-4xl text-center font-bold pb-10">其他飲品</h2>
        <div class="container flex flex-wrap mx-auto ">
            <div class="w-full md:w-1/3 md:p-4 py-4 px-20" data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                data-aos-delay="100">
                <div class="text-center rounded-lg shadow-lg border-zinc-400 border bg-white overflow-hidden">
                    <h3 class="text-xl font-bold py-8 bg-amber-100">茶類</h3>
                    <ul class="divide-y divide-zinc-300  bg-white-zinc-300 text-zinc-900 border-t">
                        <li class="py-4">深焙綠茶</li>
                        <li class="py-4">熱帶水果茶</li>
                        <li class="py-4">普洱茶</li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-1/3 md:p-4 py-4 px-20" data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                data-aos-delay="300">
                <div class="text-center rounded-lg shadow-lg border-zinc-400 border bg-white
                bg-white overflow-hidden">
                    <h3 class="text-xl font-bold py-8 bg-orange-300">奶昔</h3>
                    <ul class="divide-y divide-zinc-300 border-zinc-300 text-zinc-900 border-t">
                        <li class="py-4">香蕉奶昔</li>
                        <li class="py-4">蘋果奶昔</li>
                        <li class="py-4">酪梨奶昔</li>
                        <li class="py-4">香草奶昔</li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-1/3 md:p-4 py-4 px-20" data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                data-aos-delay="500">
                <div class="text-center rounded-lg shadow-lg border-zinc-400 border bg-white
                bg-white overflow-hidden">
                    <h3 class="text-xl font-bold py-8 bg-amber-400">紅茶</h3>
                    <ul class="divide-y divide-zinc-300 border-zinc-300 text-zinc-900 border-t">
                        <li class="py-4">英式大吉嶺</li>
                        <li class="py-4">錫蘭紅茶</li>
                        <li class="py-4">阿薩姆紅茶</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- 聯絡我 -->
    <section class="py-20 bg-amber-100 lg:w-3/4 mx-auto" id="contact">
        <div class="w-1/2 mx-auto">
            <h2 class="text-4xl font-black text-center pb-10">客服中心</h2>
            <form action="">
                <div class="mb-3">
                    <label for="" class="block mb-2">姓名</label>
                    <input type="text" class="border border-zinc-800 w-full p-3 rounded">
                </div>
                <div class="mb-3">
                    <label for="" class="block mb-2">連絡電話</label>
                    <input type="text" class="border border-zinc-800 w-full p-3 rounded">
                </div>
                <div class="mb-3">
                    <label for="" class="block mb-2">Email</label>
                    <input type="text" class="border border-zinc-800 w-full p-3 rounded">
                </div>
                <div class="mb-3">
                    <label for="" class="block mb-2">內容</label>
                    <textarea name="" id="" cols="30" rows="10"
                        class="border border-zinc-800 w-full p-3 rounded"></textarea>
                </div>
                <div>
                    <input type="submit" value="送出" class="px-5 py-2 bg-amber-400 rounded">
                </div>
            </form>
        </div>
    </section>
    <!-- 返回 -->
    <div class="fixed p-2 bottom-10 right-10 w-fit h-fit bg-slate-300 z-50 rounded-md hover:scale-125 hover:bg-slate-600 hover:text-white duration-200">
        <a href="/portfolio" class="font-bold text-2xl goTop">
            返回作品集
        </a>
    </div>
    <!-- footer -->
    <footer class="flex bg-zinc-900 text-zinc-50 px-3 py-5 justify-between text-sm">
        <div>
            COPYRIGHTS&copy;2023.All Rights Reserved
        </div>
        <div>
            Design by Ch1yo.
        </div>
    </footer>

    <script>
        AOS.init({
            offset: 0,
            // anchorPlacement: 'center-bottom'
        });
        var image = document.getElementsByClassName('thumbnail');
        let cover = document.querySelector('.cover')
        new simpleParallax(image, {
            orientation: 'right',
            delay: 1,
            scale: 2
        });
        new simpleParallax(cover, {
            delay: .6,
            orientation: 'down',
            scale: 1.5
        })

        // swiper
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'h',
            loop: true,
            effect: 'cube',
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            // scrollbar: {
            // el: '.swiper-scrollbar',
            // },
        });
    </script>
</body>

</html>`
	}
render$4["astro:html"] = true;

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render$4
}, Symbol.toStringTag, { value: 'Module' }));

function render$3({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ch1yo's Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <style>
        /* 返回作品css */
        .back {
            background-color: rgb(203 213 225);
            position: fixed;
            padding: 8px;
            bottom: 40px;
            right: 40px;
            width: fit-content;
            height: fit-content;
            z-index: 50;
            border-radius: 0.375rem ;
            transition: 200ms;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
        }
        .back:hover {
            background-color: rgb(71 85 105);
            transform: scale(1.25);
        }
        .back a {
            color: black;
            text-decoration: none;
        }
        .back:hover.back a{
            color: white;
        }
    </style>
</head>

<body>
    <div class="back">
        <a href="/portfolio">
            返回作品集
        </a>
    </div>
    <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/portfolio">Ch1yo's website</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link">login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- <header class="ratio ratio-21x9">
        <img src="https://picsum.photos/id/29/1600/900" alt="" class="w-100 h-100 object-fit-cover">
    </header> -->
    <div id="slider" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://picsum.photos/id/77/1600/900" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://picsum.photos/id/75/1600/900" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://picsum.photos/id/74/1600/900" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://picsum.photos/id/79/1600/900" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#slider"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#slider"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        <!-- about -->
        <div class="rounded position-absolute top-50 start-50 translate-middle bg-primary-subtle">
            <h3 class="p-4">
                Bootstrap提供許多組件可以直接套用，有效率地完成網頁
            </h3>
        </div>
    </div>
    <section style="padding-block:100px">
        <div class="container">
            <div class="row gy-5 gy-lg-0">
                <div class="col-lg-4 text-lg-center text-start d-lg-block d-flex">
                    <div class="col-3 col-lg-12 mb-3 d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                        </svg>
                    </div>
                    <div class="col-9 col-lg-12">
                        <h3>hello</h3>
                        <p>
                            資產認真到處能學到所說哪裡性感軟體，電。
                        </p>
                        <a href="#" class="btn btn-primary" data-bs-target="#about-1" data-bs-toggle="modal">More</a>
                    </div>
                </div>
                <div class="col-lg-4 text-lg-center text-start d-lg-block d-flex">
                    <div class="col-3 col-lg-12 mb-3 d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                          </svg>
                    </div>
                    <div class="col-9 col-lg-12">
                        <h3>hello</h3>
                        <p>
                            資產認真到處能學到所說哪裡性感軟體，電。
                        </p>
                        <a href="#" class="btn btn-primary" data-bs-target="#about-1" data-bs-toggle="modal">More</a>
                    </div>
                </div>
                <div class="col-lg-4 text-lg-center text-start d-lg-block d-flex">
                    <div class="col-3 col-lg-12 mb-3 d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                          </svg>
                    </div>
                    <div class="col-9 col-lg-12">
                        <h3>hello</h3>
                        <p>
                            資產認真到處能學到所說哪裡性感軟體，電。
                        </p>
                        <a href="#" class="btn btn-primary" data-bs-target="#about-1" data-bs-toggle="modal" >More</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section style="padding-block:100px" class="bg-primary-subtle">
        <div class="container">
            <div class="row g-5 g-sm-3">
                <div class="col-lg-3 col-sm-6">
                    <div class="d-flex flex-column shadow rounded-3 overflow-hidden">
                        <div class="ratio ratio-16x9">
                            <img src="https://picsum.photos/id/98/800/600" alt="" class="w-100 h-100 object-fit-cover">
                        </div>
                        <div class="p-3">
                            <h3>card</h3>
                            <p>
                                最大不需要玩具把我同意，液晶一會兒頻道。
                            </p>
                        </div>
                        <div class="p-3">
                            <a href="#" class="btn btn-success" >Link</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="d-flex flex-column shadow rounded-3 overflow-hidden">
                        <div class="ratio ratio-16x9">
                            <img src="https://picsum.photos/id/98/800/600" alt="" class="w-100 h-100 object-fit-cover">
                        </div>
                        <div class="p-3">
                            <h3>card</h3>
                            <p>
                                最大不需要玩具把我同意，液晶一會兒頻道。
                            </p>
                        </div>
                        <div class="p-3">
                            <a href="#" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="d-flex flex-column shadow rounded-3 overflow-hidden">
                        <div class="ratio ratio-16x9">
                            <img src="https://picsum.photos/id/98/800/600" alt="" class="w-100 h-100 object-fit-cover">
                        </div>
                        <div class="p-3">
                            <h3>card</h3>
                            <p>
                                最大不需要玩具把我同意，液晶一會兒頻道。
                            </p>
                        </div>
                        <div class="p-3">
                            <a href="#" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="d-flex flex-column shadow rounded-3 overflow-hidden">
                        <div class="ratio ratio-16x9">
                            <img src="https://picsum.photos/id/98/800/600" alt="" class="w-100 h-100 object-fit-cover">
                        </div>
                        <div class="p-3">
                            <h3>card</h3>
                            <p>
                                最大不需要玩具把我同意，液晶一會兒頻道。
                            </p>
                        </div>
                        <div class="p-3">
                            <a href="#" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <!-- Modal -->
<div class="modal fade" id="about-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit magnam saepe voluptas tenetur iure atque itaque. Dolorum alias voluptas et, veniam nostrum id eligendi, aliquam architecto possimus, blanditiis iure.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</body>

</html>`
	}
render$3["astro:html"] = true;

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render$3
}, Symbol.toStringTag, { value: 'Module' }));

function render$2({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ch1yo's Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>

<body>
    <section class="border-b-2 border-zinc-300 py-3">
        <div class="container flex flex-wrap mx-auto items-center">
            <div class="text-xs"><i class="fa-solid fa-truck"></i> Free Shipping...</div>
            <div class="ml-auto flex">
                <div class="px-4 border-r-2 border-zinc-300 space-x-4">
                    <a href="#" class="text-xs"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-pinterest-p"></i></a>
                </div>
                <div class="px-4 border-r-2 border-zinc-300">
                    <a href="#" class="text-xs">USD <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                </div>
                <div class="px-4 border-r-2 border-zinc-300">
                    <a href="#" class="text-xs">ENG <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                </div>
                <div class="px-4">
                    <a href="#" class="text-xs">Login</a> /
                    <a href="#" class="text-xs">Register</a>
                </div>
            </div>
        </div>
    </section>
    <nav>
        <div class="container mx-auto flex flex-wrap h-16 items-center justify-between px-3 font-bold">
            <div class="hover:scale-110 duration-200">
                <a href="/">Ch1yo's website</a>
            </div>
            <div class="flex items-center justify-between space-x-3">
                <div class="hover:scale-110"><a href="#" >HOME</a></div>
                <div class="hover:scale-110"><a href="#" >SHOP</a></div>
                <div class="hover:scale-110"><a href="#" >CATEGORIES</a></div>
                <div class="hover:scale-110"><a href="#" >BLOG</a></div>
                <div class="hover:scale-110"><a href="#" >PAGE</a></div>
            </div>
            <div class="space-x-3 flex items-center justify-between">
                <div class="hover:scale-110"><a href="#" ><i class="fa-solid fa-magnifying-glass"></i></a></div>
                <div class="hover:scale-110"><a href="#" ><i class="fa-regular fa-heart"></i></a></div>
                <div class="hover:scale-110"><a href="#" ><i class="fa-solid fa-cart-shopping"></i></a></div>
            </div>
        </div>
    </nav>
    <header class="aspect-[21/9] relative">
        <img src="https://picsum.photos/id/76/1600/900" alt="" class="w-full h-full object-cover">
        <div class="bg-slate-500 opacity-80 w-fit h-fit rounded-2xl text-4xl text-white
                    absolute inset-0 m-auto p-4">
            此網頁使用TailwindCSS框架編寫，TailwindCSS是我目前最常用的CSS框架
        </div>
    </header>
    <section>
        <div class="container mx-auto flex space-x-6 py-6 ">
            <div class="w-1/3">
                <figure class="relative aspect-video group">
                    <img src="https://picsum.photos/id/92/800/600" alt="" class="w-full h-full object-cover">
                    <figcaption
                        class="absolute inset-0 m-auto bg-zinc-300/80 group-hover:bg-amber-300/20 duration-300 flex flex-col justify-center pl-5">
                        <div class="text-xs">New Collection</div>
                        <h3 class="text-3xl font-bold">Lamp</h3>
                        <a href="#" class="text-xs underline group-hover:text-white duration-300">Shop Now</a>
                    </figcaption>
                </figure>
            </div>
            <div class="w-1/3">
                <figure class="relative aspect-video group">
                    <img src="https://picsum.photos/id/92/800/600" alt="" class="w-full h-full object-cover">
                    <figcaption
                        class="absolute inset-0 m-auto bg-zinc-300/80 group-hover:bg-amber-300/20 duration-300 flex flex-col justify-center pl-5">
                        <div class="text-xs">New Collection</div>
                        <h3 class="text-3xl font-bold">Lamp</h3>
                        <a href="#" class="text-xs underline group-hover:text-white duration-300">Shop Now</a>
                    </figcaption>
                </figure>
            </div>
            <div class="w-1/3">
                <figure class="relative aspect-video group">
                    <img src="https://picsum.photos/id/92/800/600" alt="" class="w-full h-full object-cover">
                    <figcaption
                        class="absolute inset-0 m-auto bg-zinc-300/80 group-hover:bg-amber-300/20 duration-300 flex flex-col justify-center pl-5">
                        <div class="text-xs">New Collection</div>
                        <h3 class="text-3xl font-bold">Lamp</h3>
                        <a href="#" class="text-xs underline group-hover:text-white duration-300">Shop Now</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
    <section class="py-24">
        <div class="container mx-auto flex">
            <div class="w-full text-center space-y-8 mb-8">
                <h2 class="text-5xl font-bold">New Arrival</h2>
                <p class="w-1/2 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci ipsum molestiae.
                    Itaque molestias animi sunt magni iusto incidunt quae?
                </p>
            </div>
        </div>

        <div class="container mx-auto flex flex-wrap sm:space-x-4 sm:flex-nowrap">
            <div class="w-full sm:w-1/2 flex space-x-4">
                <div class="w-1/2">
                    <div>
                        <figure class="relative group aspect-[4/5]">
                            <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                            <figcaption
                                class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-cart-shopping"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-magnifying-glass"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-regular fa-heart"></i></a>
                            </figcaption>
                        </figure>
                        <div class="space-y-1 pt-2">
                            <h3>Pellensque lacuile sefs</h3>
                            <div class="flex justify-between">
                                <span class="font-bold">
                                    $392 <del class="text-xs text-zinc-300">$450</del>
                                </span>
                                <span>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div>
                        <figure class="relative group aspect-[4/5]">
                            <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                            <figcaption
                                class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-cart-shopping"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-magnifying-glass"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-regular fa-heart"></i></a>
                            </figcaption>
                        </figure>
                        <div class="space-y-1 pt-2">
                            <h3>Pellensque lacuile sefs</h3>
                            <div class="flex justify-between">
                                <span class="font-bold">
                                    $392 <del class="text-xs text-zinc-300">$450</del>
                                </span>
                                <span>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2 flex space-x-4">
                <div class="w-1/2">
                    <div>
                        <figure class="relative group aspect-[4/5]">
                            <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                            <figcaption
                                class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-cart-shopping"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-magnifying-glass"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-regular fa-heart"></i></a>
                            </figcaption>
                        </figure>
                        <div class="space-y-1 pt-2">
                            <h3>Pellensque lacuile sefs</h3>
                            <div class="flex justify-between">
                                <span class="font-bold">
                                    $392 <del class="text-xs text-zinc-300">$450</del>
                                </span>
                                <span>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div>
                        <figure class="relative group aspect-[4/5]">
                            <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                            <figcaption
                                class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-cart-shopping"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-solid fa-magnifying-glass"></i></a>
                                <a href="#"
                                    class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                        class="fa-regular fa-heart"></i></a>
                            </figcaption>
                        </figure>
                        <div class="space-y-1 pt-2">
                            <h3>Pellensque lacuile sefs</h3>
                            <div class="flex justify-between">
                                <span class="font-bold">
                                    $392 <del class="text-xs text-zinc-300">$450</del>
                                </span>
                                <span>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                    <i class="fa-regular fa-star fa-xs"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container mx-auto flex">
            <div class="w-full text-center space-y-8 mb-8">
                <h2 class="text-5xl font-bold">Feature Products</h2>
                <p class="w-1/2 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci ipsum molestiae.
                    Itaque molestias animi sunt magni iusto incidunt quae?
                </p>
            </div>
        </div>
        <div class="container flex flex-wrap mx-auto">
            <div class="sm:w-1/2 w-full p-4">
                <div class="pb-8">
                    <figure class="relative group aspect-[4/5]">
                        <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                        <figcaption
                            class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                            <a href="#"
                                class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                    class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#"
                                class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                    class="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#"
                                class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                    class="fa-regular fa-heart"></i></a>
                        </figcaption>
                    </figure>
                    <div class="space-y-1 pt-2">
                        <h3>Pellensque lacuile sefs</h3>
                        <div class="flex justify-between">
                            <span class="font-bold">
                                $392 <del class="text-xs text-zinc-300">$450</del>
                            </span>
                            <span>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-8">
                    <div class="w-1/2">
                        <div>
                            <figure class="relative group aspect-[4/5]">
                                <img src="https://picsum.photos/id/13/700/500" alt=""
                                    class="w-full h-full object-cover">
                                <figcaption
                                    class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-cart-shopping"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-magnifying-glass"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-regular fa-heart"></i></a>
                                </figcaption>
                            </figure>
                            <div class="space-y-1 pt-2">
                                <h3>Pellensque lacuile sefs</h3>
                                <div class="flex justify-between">
                                    <span class="font-bold">
                                        $392 <del class="text-xs text-zinc-300">$450</del>
                                    </span>
                                    <span>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div>
                            <figure class="relative group aspect-[4/5]">
                                <img src="https://picsum.photos/id/13/700/500" alt=""
                                    class="w-full h-full object-cover">
                                <figcaption
                                    class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-cart-shopping"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-magnifying-glass"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-regular fa-heart"></i></a>
                                </figcaption>
                            </figure>
                            <div class="space-y-1 pt-2">
                                <h3>Pellensque lacuile sefs</h3>
                                <div class="flex justify-between">
                                    <span class="font-bold">
                                        $392 <del class="text-xs text-zinc-300">$450</del>
                                    </span>
                                    <span>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 p-4 sm:w-1/2 w-full">
                <div class="flex space-x-8">
                    <div class="w-1/2">
                        <div>
                            <figure class="relative group aspect-[4/5]">
                                <img src="https://picsum.photos/id/13/700/500" alt=""
                                    class="w-full h-full object-cover">
                                <figcaption
                                    class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-cart-shopping"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-magnifying-glass"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-regular fa-heart"></i></a>
                                </figcaption>
                            </figure>
                            <div class="space-y-1 pt-2">
                                <h3>Pellensque lacuile sefs</h3>
                                <div class="flex justify-between">
                                    <span class="font-bold">
                                        $392 <del class="text-xs text-zinc-300">$450</del>
                                    </span>
                                    <span>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div>
                            <figure class="relative group aspect-[4/5]">
                                <img src="https://picsum.photos/id/13/700/500" alt=""
                                    class="w-full h-full object-cover">
                                <figcaption
                                    class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-cart-shopping"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-solid fa-magnifying-glass"></i></a>
                                    <a href="#"
                                        class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                            class="fa-regular fa-heart"></i></a>
                                </figcaption>
                            </figure>
                            <div class="space-y-1 pt-2">
                                <h3>Pellensque lacuile sefs</h3>
                                <div class="flex justify-between">
                                    <span class="font-bold">
                                        $392 <del class="text-xs text-zinc-300">$450</del>
                                    </span>
                                    <span>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                        <i class="fa-regular fa-star fa-xs"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-8">
                    <figure class="relative group aspect-[4/5]">
                        <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                        <figcaption
                            class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                            <a href="#"
                                class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                    class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#"
                                class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                    class="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#"
                                class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i
                                    class="fa-regular fa-heart"></i></a>
                        </figcaption>
                    </figure>
                    <div class="space-y-1 pt-2">
                        <h3>Pellensque lacuile sefs</h3>
                        <div class="flex justify-between">
                            <span class="font-bold">
                                $392 <del class="text-xs text-zinc-300">$450</del>
                            </span>
                            <span>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="container flex mx-auto">
            <div class="w-1/5 hover:scale-125 duration-200">
                <a href="#">
                    <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt=""
                        class="mx-auto">
                </a>
            </div>
            <div class="w-1/5 hover:scale-125 duration-200">
                <a href="#">
                    <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt=""
                        class="mx-auto">
                </a>
            </div>
            <div class="w-1/5 hover:scale-125 duration-200">
                <a href="#">
                    <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt=""
                        class="mx-auto">
                </a>
            </div>
            <div class="w-1/5 hover:scale-125 duration-200">
                <a href="#">
                    <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt=""
                        class="mx-auto">
                </a>
            </div>
            <div class="w-1/5 hover:scale-125 duration-200">
                <a href="#">
                    <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt=""
                        class="mx-auto">
                </a>
            </div>
        </div>
    </section>
    <!-- 返回 -->
    <div class="fixed p-2 bottom-10 right-10 w-fit h-fit bg-slate-300 z-50 rounded-md hover:scale-125 hover:bg-slate-600 hover:text-white duration-200">
        <a href="/portfolio" class="font-bold text-2xl goTop">
            返回作品集
        </a>
    </div>

    <footer class="py-20 bg-black text-white justify-between flex">
        <div class="container flex flex-wrap mx-auto border-b p-8 relative">
            <div class="w-1/3 flex flex-col space-y-8">
                <div>
                    60, 29th Street, San Francisco, CA 94110,
                    <br>United States of America
                </div>
                <div>Phone :<a href="#"> (495) 989—20—11</a></div>
                <div>E-mail :<a href="#">contact@wpthemego.com</a></div>
            </div>

            <div class="w-1/3 flex flex-wrap">
                <div class="w-1/2">
                    <ul class="space-y-8">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">The Policy</a></li>
                        <li><a href="#">Warranty Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="w-1/2">
                    <ul class="space-y-8">
                        <li><a href="#">Recruitment</a></li>
                        <li><a href="#">Promotion Information</a></li>
                        <li><a href="#">Shopping Guide Online</a></li>
                        <li><a href="#">Chain Stores System</a></li>
                    </ul>
                </div>
            </div>

            <div class="w-1/3 flex flex-col space-y-8 sm:block hidden">
                <div>
                    Stay updated with the latest news and special sales. Let's your email address here!
                </div>
                <div>
                    <form action="text">
                        <input type="text" value="Enter your Email!">
                        <button type="submit" value="submit"></button>
                    </form>
                </div>
            </div>
            <div class="absolute w-fit bottom-[-8px] left-1/2 -translate-x-1/2">
                <div class="px-4 space-x-4  m-auto bg-black flex flex-row items-center ">
                    <a href="#" class="text-xs"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-pinterest-p"></i></a>
                </div>
            </div>
        </div>
    </footer>

</body>

</html>`
	}
render$2["astro:html"] = true;

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render$2
}, Symbol.toStringTag, { value: 'Module' }));

function render$1({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MSI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- cdnjs雲端匯入fontawesome -->
    <link is:inline rel="stylesheet" href="/css/msi-css/global.css">
    <link is:inline rel="stylesheet" href="/css/msi-css/style.css">
    <!-- 順序不能顛倒 global為基礎預設,style做修改 -->
    <style>
        /* 返回作品css */
        .back {
            background-color: rgb(203 213 225);
            position: fixed;
            padding: 8px;
            bottom: 40px;
            right: 40px;
            width: fit-content;
            height: fit-content;
            z-index: 50;
            border-radius: 0.375rem ;
            transition: 200ms;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
        }
        .back:hover {
            background-color: rgb(71 85 105);
            transform: scale(1.25);
        }
        .back a {
            color: black;
            text-decoration: none;
        }
        .back:hover.back a{
            color: white;
        }
    </style>
</head>
<body>
    <div class="back">
        <a href="/portfolio">
            返回作品集
        </a>
    </div>
    <!-- 主選單 -->
    <nav>
        <div class="container">
            <a href="/" class="nav-logo home">Ch1yo's website</a>
            <a href="#" class="nav-logo">msi</a>
            <div class="nav-menu">
                <a href="#" class="nav-link">線上商城</a>
                <a href="#" class="nav-link">產品資訊</a>
                <a href="#" class="nav-link">AIoT方案</a>
                <a href="#" class="nav-link">活動促銷</a>
                <a href="#" class="nav-link">支援服務</a>
                <a href="#" class="nav-link">網路預約</a>
                <a href="#" class="nav-link">售後服務</a>
            </div>
            <div class="nav-menu">
                <a href="#" class="nav-link"><i class="fa-solid fa-user"></i></a>
                <a href="#" class="nav-link"><i class="fa-solid fa-location-dot"></i></a>
                <a href="#" class="nav-link"><i class="fa-solid fa-magnifying-glass"></i></a>
                <!-- 到fontawesome裡找icon -->
            </div>
        </div>
    </nav>

    <header class="header">
        <img src="https://picsum.photos/id/76/1600/900" alt="">
        <div class="h-text">
            此網頁是用傳統外部css做的，僅供練習使用，如有冒犯敬請見諒
        </div>
    </header>
    <!-- 軟體連結 -->
    <section id="soft">
        <div class="soft-container">
            <div class="soft-item">
                <div><i class="fa-solid fa-house fa-2x"></i></div>
                <!-- fa-nx可以設定大小 -->
                <div><a href="#">MSI center</a></div>
            </div>
            <div class="soft-item">
                <div><i class="fa-solid fa-plane fa-2x"></i></div>
                <div><a href="#">Afterburner</a></div>
            </div>
            <div class="soft-item">
                <div><i class="fa-solid fa-gamepad fa-2x"></i></div>
                <div><a href="#">MSI App Player</a></div>
            </div>
            <div class="soft-item">
                <div><i class="fa-solid fa-hippo fa-2x"></i></div>
                <div><a href="#">MyMSI App</a></div>
            </div>
        </div>
    </section>
    <!-- 最新產品 -->
    <section id="products">
        <h2>最新產品</h2>
        <div class="container">
            <div class="product-item">
                <img src="https://picsum.photos/id/98/800/400" alt="">
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="product-item">
                <img src="https://picsum.photos/id/98/800/400" alt="">
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="product-item">
                <img src="https://picsum.photos/id/98/800/400" alt="">
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="product-item">
                <img src="https://picsum.photos/id/98/800/400" alt="">
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="product-item">
                <img src="https://picsum.photos/id/98/800/400" alt="">
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="product-item">
                <img src="https://picsum.photos/id/98/800/400" alt="">
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

    </section>

    <!-- AIOT -->
    <SECTION id="aiot">
        <H2>完整 AIoT 方案為企業提供全面服務</H2>
        <div class="container">
            <div class="aiot-side">
                <div class="aiot-item">
                    <div class="aiot-cover">
                        <!-- 有動畫效果的圖片都要包div -->
                        <img src="https://picsum.photos/id/23/800/600" alt="">
                    </div>
                    <div class="aiot-text">
                        <h3>充電裝</h3>
                        <p>宣佈舉辦。</p>
                    </div>
                </div>
            </div>
            <div class="aiot-main">
                <div class="aiot-main-col">
                    <div class="aiot-item">
                        <div class="aiot-cover">
                            <img src="https://picsum.photos/id/23/800/600" alt="">
                        </div>
                        <div class="aiot-text">
                            <h3>充電裝</h3>
                            <p>宣佈舉辦。</p>
                        </div>
                    </div>
                </div>
                <div class="aiot-main-col">
                    <div class="aiot-item">
                        <div class="aiot-cover">
                            <img src="https://picsum.photos/id/23/800/600" alt="">
                        </div>
                        <div class="aiot-text">
                            <h3>充電裝</h3>
                            <p>宣佈舉辦。</p>
                        </div>
                    </div>
                </div>
                <div class="aiot-main-col">
                    <div class="aiot-item">
                        <div class="aiot-cover">
                            <img src="https://picsum.photos/id/23/800/600" alt="">
                        </div>
                        <div class="aiot-text">
                            <h3>充電裝</h3>
                            <p>宣佈舉辦。</p>
                        </div>
                    </div>
                </div>
                <div class="aiot-main-col">
                    <div class="aiot-item">
                        <div class="aiot-cover">
                            <img src="https://picsum.photos/id/23/800/600" alt="">
                        </div>
                        <div class="aiot-text">
                            <h3>充電裝</h3>
                            <p>宣佈舉辦。</p>
                        </div>
                    </div>
                </div>
                <div class="aiot-main-col">
                    <div class="aiot-item">
                        <div class="aiot-cover">
                            <img src="https://picsum.photos/id/23/800/600" alt="">
                        </div>
                        <div class="aiot-text">
                            <h3>充電裝</h3>
                            <p>宣佈舉辦。</p>
                        </div>
                    </div>
                </div>
                <div class="aiot-main-col">
                    <div class="aiot-item">
                        <div class="aiot-cover">
                            <img src="https://picsum.photos/id/23/800/600" alt="">
                        </div>
                        <div class="aiot-text">
                            <h3>充電裝</h3>
                            <p>宣佈舉辦。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SECTION>
    
    <!-- info -->
    <section id="info">
        <div class="container">
            <div class="info-top-item">
                <a href="#">
                    <i><i class="fa-solid fa-ticket fa-3x"></i></i>
                    <span>產品註冊</span>
                </a>
            </div>
            <div class="info-top-item">
                <a href="#">
                    <i><i class="fa-solid fa-ticket fa-3x"></i></i>
                    <span>產品註冊</span>
                </a>
            </div>
            <div class="info-top-item">
                <a href="#">
                    <i><i class="fa-solid fa-ticket fa-3x"></i></i>
                    <span>產品註冊</span>
                </a>
            </div>
            <div class="info-top-item">
                <a href="#">
                    <i><i class="fa-solid fa-ticket fa-3x"></i></i>
                    <span>產品註冊</span>
                </a>
            </div>
            <div class="info-bottom-item">
                <div class="info-card">
                    <img src="https://picsum.photos/id/12/800/400" alt="">
                    <div class="info-text">
                        <h3>會員獎勵計畫</h3>
                        <p>近日感覺獨特逐步，沒有什麼長。</p>
                    </div>
                </div>
            </div>
            <div class="info-bottom-item">
                <div class="info-card">
                    <img src="https://picsum.photos/id/12/800/400" alt="">
                    <div class="info-text">
                        <h3>會員獎勵計畫</h3>
                        <p>近日感覺獨特逐步，沒有什麼長。</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>

    <!-- footer -->
    <footer>
        <div class="container">
            <div class="footer-item">
                <h3>社群</h3>
                <ul>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>社群</h3>
                <ul>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>社群</h3>
                <ul>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>社群</h3>
                <ul>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <h3>社群</h3>
                <ul>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                    <li><a href="#">會員中心</a></li>
                </ul>
            </div>
        </div>
    </footer>
    <!-- copyright -->
    <footer>
        <div class="container">
            <div class="copyright-item">
                Copyright © 2023 版權為微星科技所有。
            </div>
            <div class="copyright-item">
                <a href="#">隱私權保護政策</a>
            </div>
        </div>
    </footer>

    <a href="#">
        <div class="tri"></div>
    </a>
</body>
</html>`
	}
render$1["astro:html"] = true;

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render$1
}, Symbol.toStringTag, { value: 'Module' }));

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ch1yo's Vue購物網站</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <style>
        .cart {
            transition: 300ms;

        }
        .active {
            transform: translateX(0)!important;
        }
    </style>
</head>

<body>
    <div id="app">
        <!-- 主選單 -->
        <nav class="flex p-5 bg-zinc-900">
            <a href="/" class="hover:scale-125 duration-200 text-zinc-50 pl-10 ">Ch1yo's 購物網站</a> 

            <a href="#" class="hover:scale-125 duration-200 text-zinc-50 ml-auto" @click="is_open = !is_open">購物車</a>
        </nav>
        <div class="py-20 font-bold text-center">
            <h2 class="text-3xl lg:text-6xl">
                這裡是練習用Vue.js編寫的購物網站，純粹前端的購物車
            </h2>
            <p class="text-2xl lg:text-5xl pt-5">左方還有簡易的天氣查詢(使用openweather api)</p>
        </div>
        <!-- 購物車 -->
        <div id="shopping_cart"
            :class="{active:is_open}"
            class="rounded-l-xl border border-cyan-800 flex flex-wrap flex-col cart w-[400px] h-[600px] bg-zinc-300 right-0 top-[60px] fixed p-3 translate-x-full">
            <!-- 購物車內容 -->
            <div v-for="cart,idx in carts" class="py-2">
                <h3>{{cart.title}}</h3>
                <div>
                    {{cart.price}} $
                </div>
                <a href="#" class="bg-blue-200 rounded-lg p-2" 
                @click="removeItem(idx)">移除</a>
            </div>
            <!-- 清空購物車 -->
            <a href="#" @click="clearCart()" v-if="carts.length != 0" class="hover:scale-110 absolute w-fit h-fit right-40 bottom-5 p-2 bg-red-600 rounded-lg text-white inline-block">清空購物車</a>
            <a href="#" @click="cancel()" class="hover:scale-110 absolute w-fit h-fit right-5 bottom-5 p-2 bg-red-600 rounded-lg text-white inline-block">關閉購物車</a>
            <div class="absolute w-fit h-fit left-5 bottom-5">
                小計：{{total}} $
            </div>
        </div>

        <!-- 卡片商品 -->
        <div class="container flex flex-wrap mx-auto">
            <div v-for="product,idx in products" class="lg:w-1/4 sm:w-1/2 w-full p-4">
                <div class="bg-zinc-200 border border-zinc-700 rounded-lg overflow-hidden">
                    <div class="aspect-video">
                        <!-- {{product.image}} -->
                        <img :src="product.image" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="p-3 space-y-4">
                        <h3>{{product.title}}</h3>
                        <div>{{product.price}}$</div>
                        <a href="#" class="hover:scale-110 duration-200 px-5 py-2 rounded-lg bg-blue-400 inline-block" @click.prevent="storeToCart(product.id)" @click="open()">加入購物車</a>
                        <!-- <a href="#" class="px-5 py-2 rounded-lg bg-blue-400 inline-block" @click="storeToCart(idx)">加入購物車</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 天氣 -->
    <div id="weather" class="fixed inset-0 top-20 left-2 z-50 w-fit h-fit bg-slate-50 rounded-lg">
        <select name="" id="" v-model="q" @change="getWeather()" class="bg-cyan-50 p-1 rounded-lg">
            <option value="">--這裡可以看天氣哦--</option>
            <option value="taipei">台北</option>
            <option value="tokyo">東京</option>
            <option value="bangkok">曼谷</option>
            <option value="seoul">首爾</option>
        </select>
        <div v-if="weathers" class="space-y-2 p-2">
            <h2>今日天氣 {{w.description}}</h2>
            <img :src="\`https://openweathermap.org/img/wn/\${w.icon}@2x.png\`" alt="">
            <div>平均溫度:{{main.temp}}&deg;C</div>
            <div>最高溫度:{{main.temp_max}}&deg;C</div>
            <div>最低溫度:{{main.temp_min}}&deg;C</div>
            <div>體感溫度:{{main.feels_like}}&deg;C</div>
            <div>目前濕度:{{main.humidity}}%</div>
            <a href="#" class="w-fit h-fit px-5 py-2
             bg-red-600 rounded-lg text-white inline-block"
                @click="close()">
                關閉天氣
            </a>
        </div>
    </div>
    <!-- 返回 -->
    <div class="fixed p-2 bottom-10 right-10 w-fit h-fit bg-slate-300 z-50 rounded-md hover:scale-125 hover:bg-slate-600 hover:text-white duration-200">
        <a href="/portfolio" class="font-bold text-2xl goTop">
            返回作品集
        </a>
    </div>
    <footer class="py-20 bg-black text-white justify-between flex">
        <div class="container flex flex-wrap mx-auto border-b p-8 relative">
            <div class="w-1/3 flex flex-col space-y-8">
                <div>
                    60, 29th Street, San Francisco, CA 94110,
                    <br>United States of America
                </div>
                <div>Phone :<a href="#"> (495) 989—20—11</a></div>
                <div>E-mail :<a href="#">contact@wpthemego.com</a></div>
            </div>

            <div class="w-1/3 flex flex-wrap">
                <div class="w-1/2">
                    <ul class="space-y-8">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">The Policy</a></li>
                        <li><a href="#">Warranty Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="w-1/2">
                    <ul class="space-y-8">
                        <li><a href="#">Recruitment</a></li>
                        <li><a href="#">Promotion Information</a></li>
                        <li><a href="#">Shopping Guide Online</a></li>
                        <li><a href="#">Chain Stores System</a></li>
                    </ul>
                </div>
            </div>

            <div class="w-1/3 flex flex-col space-y-8 sm:block hidden">
                <div>
                    Stay updated with the latest news and special sales. Let's your email address here!
                </div>
                <div>
                    <form action="text">
                        <input type="text" value="Enter your Email!">
                        <button type="submit" value="submit"></button>
                    </form>
                </div>
            </div>
            <div class="absolute w-fit bottom-[-8px] left-1/2 -translate-x-1/2">
                <div class="px-4 space-x-4  m-auto bg-black flex flex-row items-center ">
                    <a href="#" class="text-xs"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-pinterest-p"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        Vue.createApp({
            data(){
                return{
                    products: '',
                    carts:[],
                    is_open: false
                }
            },
            created(){
                const url = 'https://fakestoreapi.com/products';
                fetch(url).then(res=>res.json()).then(data => {
                    this.products = data;
                    // console.log(data);
                })
            },
            methods:{
                storeToCart(pid){
                    let pd = this.products.find(data => data.id === pid)
                    // console.log(pd);
                    this.carts.push(pd);

                },
                clearCart(){
                    if(confirm('確認清空購物車嗎？')){
                        
                        this.carts.length = 0;
                        
                    }
                },
                removeItem(idx){
                    if(confirm('確認移除商品嗎？')){
                        this.carts.splice(idx,1);
                        
                    }
                },
                cancel(){
                    this.is_open=false;
                },
                open(){
                    this.is_open=true;
                }
            },
            computed:{
                total(){
                    if(this.carts.length > 0){
                        return Math.round(this.carts.map(data=>data.price).reduce((x,y)=>Number(x)+Number(y)));
                    }else{
                        return 0;
                    }
                    // return this.price.reduce((x,y)=>Number(x)+Number(y));
                }
            }

        }).mount('#app');

        Vue.createApp({
            data(){
                return {
                    q:'',
                    weathers:''
                }
            },
            methods:{
                getWeather(){
                    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=taipei&units=metric&lang=zh_tw&appid=b1ecbccd638b763d489602917ba47cc3';
                    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${this.q}&units=metric&lang=zh_tw&appid=b1ecbccd638b763d489602917ba47cc3\`;
                    fetch(url)
                    .then(res => res.json())
                    .then(data=>{
                        this.weathers = data;
                        console.log(data);
                    })
                },
                close(){
                    this.weathers=false;
                }
            },
            computed:{
                main(){
                    return this.weathers.main;
                },
                w(){
                    return this.weathers.weather[0];
                }
            }
        }).mount('#weather');
    </script>
</body>
</html>`
	}
render["astro:html"] = true;

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
