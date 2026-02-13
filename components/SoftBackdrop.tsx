export default function SoftBackdrop() {
    return (
        <div className="fixed inset-0 -z-1 pointer-events-none overflow-hidden">
            {/* Main orange wave - top center */}
            <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-400/80 via-orange-500/60 to-transparent rounded-full blur-3xl animate-float" />
            
            {/* Secondary orange wave - right side */}
            <div className="absolute right-0 top-1/3 w-[600px] h-[400px] bg-gradient-to-l from-orange-500/70 via-orange-400/50 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
            
            {/* Tertiary orange wave - left side */}
            <div className="absolute left-0 bottom-1/4 w-[700px] h-[450px] bg-gradient-to-r from-orange-400/60 via-orange-500/40 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            
            {/* Accent wave - orange with slight warmth */}
            <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-gradient-to-t from-orange-300/50 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
    )
}