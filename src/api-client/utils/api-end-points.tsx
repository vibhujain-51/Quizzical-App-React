export class ApiEndPoints {
  public static SecondaryUrl = {
    getSecondaryUrl() {
      return "/api.php?";
    },
  };

  public static QuizSetup = {
    getQuizWithOnlyQuestionUrl(numberOfQuestion: number) {
      return `amount=${numberOfQuestion}`;
    },

    getQuizWithQuestionAndOnlyCategoryUrl(
      numberOfQuestion: number,
      category: string
    ) {
      return `amount=${numberOfQuestion}&category=${category}`;
    },

    getQuizWithQuestionAndOnlyDifficultyUrl(
      numberOfQuestion: number,
      difficulty: string
    ) {
      return `amount=${numberOfQuestion}&difficulty=${difficulty}`;
    },

    getQuizWithQuestionAndOnlyTypeUrl(numberOfQuestion: number, type: string) {
      return `amount=${numberOfQuestion}&type=${type}`;
    },

    getQuizWithQuestionCategoryAndDifficultyUrl(
      numberOfQuestion: number,
      category: string,
      difficulty: string
    ) {
      return `amount=${numberOfQuestion}&category=${category}&difficulty${difficulty}`;
    },

    getQuizWithQuestionDifficultyAndTypeUrl(
      numberOfQuestion: number,
      difficulty: string,
      type: string
    ) {
      return `amount=${numberOfQuestion}&category=${difficulty}&difficulty${type}`;
    },

    getQuizWithQuestionCategoryAndTypeUrl(
      numberOfQuestion: number,
      category: string,
      type: string
    ) {
      return `amount=${numberOfQuestion}&category=${category}&difficulty${type}`;
    },

    getQuizWithEveryFieldUrl(
      numberOfQuestion: number,
      category: string,
      difficulty: string,
      type: string
    ) {
      return `amount=${numberOfQuestion}&category=${category}&difficulty${difficulty}&type=${type}`;
    },

    getToken(token: string) {
      return `&token=${token}`;
    },
  };

  public static TokenSetup = {
    getSessionTokenBaseUrl() {
      return "/api_token.php?";
    },

    getSessionToken() {
      return "command=request";
    },

    resetSessionToken(expiredToken: string) {
      return `command=reset&token=${expiredToken}`;
    },
  };
}
