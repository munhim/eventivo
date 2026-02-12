import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

export const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast({ title: "Please fill in both fields", variant: "destructive" });
      return;
    }
    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setComments((prev) => [newComment, ...prev]);
    setName("");
    setText("");
    toast({ title: "Comment posted!" });
  };

  return (
    <section className="mt-16 border-t border-border pt-12">
      <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
        <MessageCircle className="text-gold" size={24} />
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-6 mb-8">
        <div className="mb-4">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-background"
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="bg-background"
          />
        </div>
        <Button type="submit" className="bg-gold hover:bg-gold/90 text-ivory">
          <Send size={16} className="mr-2" />
          Post Comment
        </Button>
      </form>

      {/* Comments List */}
      {comments.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <User size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-xs text-muted-foreground">{comment.date}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{comment.text}</p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};
