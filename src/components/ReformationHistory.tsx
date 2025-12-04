import { motion } from "motion/react";
import { ArrowLeft, History } from "lucide-react";
import { Button } from "./ui/button";

export default function ReformationHistory() {
  return (
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-900/30 border border-green-800 mb-6">
            <History className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Reformation History
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Exploring the historical context, myths, and key figures that shaped the Protestant Reformation.
          </p>
        </motion.div>

        {/* Content Shell */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
        >
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-12 text-center">
                <p className="text-gray-500 italic">
                    Content coming soon...
                </p>
                <p className="text-gray-600 text-sm mt-2">
                    (Videos and historical analysis will appear here)
                </p>
            </div>
        </motion.div>
        
        {/* Back Button */}
        <div className="mt-16 flex justify-center">
            <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="gap-2 border-gray-700 hover:bg-gray-800 text-gray-300"
            >
                <ArrowLeft size={16} />
                Back
            </Button>
        </div>
      </div>
    </div>
  );
}
