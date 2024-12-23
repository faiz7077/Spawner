"use strict";
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const lucide_react_1 = require("lucide-react");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
function Home() {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [message, setMessage] = (0, react_1.useState)('');
    const runBot = () => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        try {
            const response = yield fetch('/api/run-bot', { method: 'POST' });
            const data = yield response.json();
            if (response.ok) {
                setMessage(data.message);
            }
            else {
                setMessage(`Error: ${data.message}`);
            }
        }
        catch (error) {
            setMessage(`Error: ${error}`);
        }
        finally {
            setLoading(false);
        }
    });
    const plans = [
        {
            name: 'Free Plan',
            description: 'Perfect for getting started',
            price: '$0',
            features: [
                'Boost engagement with target responses',
                'Automate comment replies to enhance audience interaction',
                'Turn followers into customers with targeted messaging',
            ],
            cta: 'Get Started',
        },
        {
            name: 'Smart AI Plan',
            description: 'Advanced features for power users',
            price: '$99',
            features: [
                'All features from Free Plan',
                'AI-powered response generation',
                'Advanced analytics and insights',
                'Priority customer support',
                'Custom branding options',
            ],
            cta: 'Upgrade Now',
        },
    ];
    return (React.createElement("main", null,
        React.createElement("section", { className: "relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg" },
            React.createElement("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" }),
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "container px-4 py-8" },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("div", { className: "h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold" }, "li"),
                            React.createElement("span", { className: "text-xl font-semibold text-primary-foreground" }, "Slide")),
                        React.createElement("nav", { className: "hidden space-x-6 text-sm text-blue-200 md:block" },
                            React.createElement(link_1.default, { href: "#features" }, "Features"),
                            React.createElement(link_1.default, { href: "#pricing" }, "Pricing"),
                            React.createElement(link_1.default, { href: "#about" }, "About")),
                        React.createElement(button_1.Button, { onClick: runBot, className: "bg-blue-600 text-white hover:bg-blue-700" }, "Start Bot")),
                    React.createElement("div", { className: "mx-auto mt-16 max-w-3xl text-center" },
                        React.createElement("h1", { className: "text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl" }, "Transform Your Instagram Engagement with Slide"),
                        React.createElement("p", { className: "mt-6 text-lg text-blue-200" }, "Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement effortlessly, turning interactions into valuable business opportunities."),
                        React.createElement("div", { className: "mt-8 flex justify-center gap-4" },
                            React.createElement(button_1.Button, { size: "lg", className: "bg-blue-600 text-white hover:bg-blue-700" }, "Get Started"),
                            React.createElement(button_1.Button, { size: "lg", variant: "outline", className: "border-blue-400  hover:bg-blue-900/50" }, "Learn More"))),
                    React.createElement("div", { className: "relative h-40 md:h-80 w-full  mt-10" },
                        React.createElement(image_1.default, { src: "/Ig-creators.png", alt: "Community member", fill: true, className: "object-cover" }))))),
        React.createElement("section", { className: "container w-full py-12 md:py-24 lg:py-32 bg-background" },
            React.createElement("div", { className: "container px-4 md:px-6" },
                React.createElement("div", { className: "flex flex-col items-center justify-center space-y-4 text-center" },
                    React.createElement("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl" }, "Choose Your Plan"),
                    React.createElement("p", { className: "max-w-[900px] text-muted-foreground" }, "Select the perfect plan to boost your Instagram engagement")),
                React.createElement("div", { className: "grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8" }, plans.map((plan, index) => (React.createElement(card_1.Card, { key: index, className: "flex flex-col justify-between" },
                    React.createElement(card_1.CardHeader, null,
                        React.createElement(card_1.CardTitle, null, plan.name),
                        React.createElement(card_1.CardDescription, null, plan.description)),
                    React.createElement(card_1.CardContent, { className: "grid gap-4" },
                        React.createElement("div", { className: "text-4xl font-bold" },
                            plan.price,
                            React.createElement("span", { className: "text-lg font-normal text-muted-foreground" }, "/month")),
                        React.createElement("ul", { className: "space-y-2" }, plan.features.map((feature, i) => (React.createElement("li", { key: i, className: "flex items-center" },
                            React.createElement(lucide_react_1.CheckCircle, { className: "mr-2 h-4 w-4 text-primary" }),
                            React.createElement("span", { className: "text-sm text-muted-foreground" }, feature)))))),
                    React.createElement(card_1.CardFooter, null,
                        React.createElement(button_1.Button, { className: "w-full" }, plan.cta))))))))));
}
