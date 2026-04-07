import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function StatItem({ value, suffix = '', label, color, delay }) {
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const count = useCountUp(numericValue, 1600, started);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={ref}
            className="stats__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="stats__value" style={{ color }}>
                {numericValue ? `${count}${suffix}` : value}
            </div>
            <div className="stats__label">{label}</div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="stats section">
            <div className="container stats__inner">
                <StatItem value="4" suffix="+" label="User Roles" color="#A78BFA" delay={0} />
                <StatItem value="10" suffix="+" label="Core Features" color="#67E8F9" delay={0.1} />
                <StatItem value="4" suffix="" label="AI Capabilities" color="#F9A8D4" delay={0.2} />
                <StatItem value="100" suffix="%" label="Academic Focused" color="#A78BFA" delay={0.3} />
            </div>
        </section>
    );
}
