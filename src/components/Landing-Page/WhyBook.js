import React from "react";

export default function WhyBook() {
    return (
        <section className="why-book">
            <h1 className="why-title">Why Us?</h1>
            <div className="container flex-center">
                <div className="why-reasons">
                    <h1>Save over big name travel</h1>
                    <h2>
                        <i style={{color: 'green'}} class="fas fa-dollar-sign" />
                    </h2>
                    <p>
                        Who doesn't like more money in their pockets? More money
                        means more fun and activities for the family.
                    </p>
                </div>
                <div className="why-reasons">
                    <h1>No hidden fees</h1>
                    <h2>
                        <i class="fas fa-question" />
                    </h2>
                    <p>
                        We lay down all your costs including any resort fees
                        that others do not.
                    </p>
                </div>
                <div className="why-reasons">
                    <h1>VIP Blue Band</h1>
                    <h2>
                        <i style={{color: 'blue'}} class="fas fa-ring" />
                    </h2>
                    <p>
                        VIP Blue bands provides you with access to
                        certain VIP areas around the resort. With others, you receive
                        a tan or yellow band which has the least amount of perks.
                    </p>
                </div>
            </div>
        </section>
    );
}
