(function () {
    // 配置模板
    const getEemplate = () => {
        // 创建模板
        const template = document.createElement('template');
        // 给模板设置id 方便查找
        template.id = 'userCardTemplate';

        template.innerHTML = `
    <style>
        :host {
                display: flex;
                align-items: center;
                width: 450px;
                height: 180px;
                background-color: #d4d4d4;
                border: 1px solid #d5d5d5;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                border-radius: 3px;
                overflow: hidden;
                padding: 10px;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
        .image {
                flex: 0 0 auto;
                width: 160px;
                height: 160px;
                vertical-align: middle;
                border-radius: 5px;
            }
        .container {
                box-sizing: border-box;
                padding: 20px;
                height: 160px;
            }
        .container > .name {
                font-size: 20px;
                font-weight: 600;
                line-height: 1;
                margin: 0;
                margin-bottom: 5px;
            }
        .container > .email {
                font-size: 12px;
                opacity: 0.75;
                line-height: 1;
                margin: 0;
                margin-bottom: 15px;
            }
        .container > .button {
                padding: 10px 25px;
                font-size: 12px;
                border-radius: 5px;
                text-transform: uppercase;
            }
     </style>

    <img class="image">
    <div class="container">
        <p class="name"></p>
        <p class="email"></p>
        <button class="button">Follow John</button>
    </div>
    `;

        return template;
    };
    // 讲模板放到dom结构中去
    const createEemplate = () => {
        document.body.appendChild(getEemplate());
    };

    createEemplate();

    class H265Video extends HTMLElement {
        constructor() {
            super();
            this.creatShadow();
            // 此处防止vue等框架类型的组件使用时 生命周期导致的参数异常 因此延迟绑定参数
            setTimeout(() => {
                this.creatContent();
            });
        }

        /**
         * 封闭内部dom
         */
        creatShadow() {
            this.shadow = this.attachShadow({mode: 'closed'});
        }

        /**
         * 创建内部显示内容
         */
        creatContent() {
            var templateElem = document.getElementById('userCardTemplate');
            var content = templateElem.content.cloneNode(true);
            content.querySelector('img').setAttribute('src', this.getAttribute('image'));
            content.querySelector('.container>.name').innerText = this.getAttribute('name');
            content.querySelector('.container>.email').innerText = this.getAttribute('email');
            this.shadow.appendChild(content);
        }

        /**
         * 当自定义元素第一次被连接到文档DOM时被调用
         * 相当于mounted
         */
        connectedCallback() {
            console.log('connectedCallback')
        }

        /**
         * 当自定义元素与文档DOM断开连接时被调用。
         * 与beforeDestroy类似
         */
        disconnectedCallback() {
            console.log('disconnectedCallback')
        }

        /**
         * 当自定义元素被移动到新文档时被调用。
         */
        adoptedCallback() {
            console.log('adoptedCallback')

        }

        /**
         * 当自定义元素的一个属性被增加、移除或更改时被调用。
         */
        attributeChangedCallback() {
            console.log('attributeChangedCallback')
        }
    }

    window.customElements.define('h265-video', H265Video);
})();

