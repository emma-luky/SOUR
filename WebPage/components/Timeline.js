class Timeline extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sour Clothing Timeline</title>
            <style>
                .timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .timeline-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                }
                .time {
                    text-align: center;
                    font-size: 20px;
                    font-weight: 400;
                    background-color: #f7f3ea;
                    color: #692b20;
                    padding: 5px 15px;
                    border-radius: 20px;
                    width: 115px;
                }
                .circle {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #f7f3ea;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .content {
                    max-width: 400px;
                }
                .title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #692b20;
                }
                .description {
                    font-size: 15px;
                    font-weight: 400;
                    color: #692b20;
                }
            </style>
        </head>
        <div class="timeline">
            <div class="timeline-item">
                <div class="time">09/2022</div>
                <div class="circle">✅</div>
                <div class="content">
                    <div class="title">Ideation and Problem Identification</div>
                    <div class="description">
                        Identified the need for a social eCommerce platform and conducted initial market research to validate the idea.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">08/2023</div>
                <div class="circle">✅</div>
                <div class="content">
                    <div class="title">Business Case Development</div>
                    <div class="description">
                        Created a business case and pitch deck.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">09/2024</div>
                <div class="circle">✅</div>
                <div class="content">
                    <div class="title">Prototype Development</div>
                    <div class="description">
                        Designed a high-fidelity prototype using Figma.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">10/2024</div>
                <div class="circle">✅</div>
                <div class="content">
                    <div class="title">Funding and Resource Acquisition</div>
                    <div class="description">
                        Recruited key team members and pitched to stakeholders, securing funding for the prototyping phases.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">02/2025</div>
                <div class="circle">✅</div>
                <div class="content">
                    <div class="title">Alpha Prototype</div>
                    <div class="description">
                        Created the development environment and the basic e-commerce version of the application using Python and React Native.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">02/2025</div>
                <div class="circle">✅</div>
                <div class="content">
                    <div class="title">Beta Prototype</div>
                    <div class="description">
                        Implement the final ecommerce and social media aspects of SOUR, messaging liking, linking, etc.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">02/2025</div>
                <div class="circle"></div>
                <div class="content">
                    <div class="title">Beta User Testing</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">02/2025</div>
                <div class="circle"></div>
                <div class="content">
                    <div class="title">Final, MVP</div>
                    <div class="description">
                        Implement auto generated listings with tags, feed algorithms, and searching.
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="time">04/2025</div>
                <div class="circle"></div>
                <div class="content">
                    <div class="title">Product Launch</div>
                    <div class="description">Deploy the application for download.</div>
                </div>
            </div>
        </div>
        `;
    }
}

window.customElements.define('timeline-component', Timeline);
