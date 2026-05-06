import SiteHeader from "@/components/SiteHeader";
import Quiz from "@/components/Quiz";

const QuizPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-20">
        <Quiz />
      </div>
      <footer className="py-8 px-4 text-center border-t border-gold/30 bg-crimson-deep text-paper/80">
        <p className="text-sm">Sử Việt Ký © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
};

export default QuizPage;
