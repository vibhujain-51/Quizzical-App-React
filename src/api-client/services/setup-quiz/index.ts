
import axios from "axios";
import { apiClientServices } from "../..";
import { FormValuesTypes } from "../../../containers/quiz-setup";
import { ApiEndPoints } from "../../utils/api-end-points"

export const getSessionToken = async ()=>{
    const getSessionBaseTokenUrl = ApiEndPoints.TokenSetup.getSessionTokenBaseUrl();
    const getSessionTokenUrl = ApiEndPoints.TokenSetup.getSessionToken();
    const response = await apiClientServices.get(`${getSessionBaseTokenUrl}${getSessionTokenUrl}`)
    return response
}

export const resetSessionToken = async (expiredToken:string)=>{
    const getSessionBaseTokenUrl = ApiEndPoints.TokenSetup.getSessionTokenBaseUrl();
    const getResetSessionTokenUrl = ApiEndPoints.TokenSetup.resetSessionToken(expiredToken)
    const response = await apiClientServices.get(`${getSessionBaseTokenUrl}${getResetSessionTokenUrl}`)
    return response
}

export const getQuizQuestions = async (formValues:FormValuesTypes,token:string)=>{
    
    const {numberOfQuestions,questionCategory,questionDifficulty,questionsType} = formValues

    try{
        // const response = await getSessionToken();
        if(token){
            const tokenUrl = ApiEndPoints.QuizSetup.getToken(token)
            const secondaryBaseUrl = ApiEndPoints.SecondaryUrl.getSecondaryUrl();

            if(questionCategory==="any" && questionDifficulty==="any" && questionsType==="any"){
                return await getOnlyQuestion(tokenUrl,secondaryBaseUrl,numberOfQuestions)
                
            }

            if(questionCategory && questionDifficulty==="any" && questionsType==="any"){
                return await getQuestionOnlyWithCategory(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionCategory!)
            }

            if(questionCategory==="any" && questionDifficulty && questionsType==="any"){
                return await getQuestionOnlyWithDifficulty(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionDifficulty!)
            }
            
            if(questionCategory==="any" && questionDifficulty==="any" && questionsType){
                return await getQuestionOnlyWithType(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionsType!)
            }

            if(questionCategory && questionDifficulty && questionsType==="any"){
                return await getQuestionWithCategoryAndDifficulty(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionCategory!,questionDifficulty!)
            }

            if(questionCategory==="any" && questionDifficulty && questionsType){
                return await getQuestionWithDifficultyAndType(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionDifficulty!,questionsType!)
            }

            if(questionCategory&& questionDifficulty==="any"  && questionsType){
                return await getQuestionWithCategoryAndType(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionCategory!,questionsType!)
            }

            if(questionCategory && questionDifficulty && questionsType){
                return await getQuestionWithEverything(tokenUrl,secondaryBaseUrl,numberOfQuestions,questionCategory!,questionDifficulty!,questionsType!,)
            }
            

        }else throw new Error("Failed to retrieve session token")
    }
    catch (error:any){
        console.log(error)
    }
}

const getOnlyQuestion = async(tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number)=>{
        console.log("onlyques");
        
        const url = ApiEndPoints.QuizSetup.getQuizWithOnlyQuestionUrl(numOfQuestions);
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`);
        return response
        
    }

const getQuestionOnlyWithCategory = async(tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionCategory:string)=>{
        console.log("questions with category");
        const url = ApiEndPoints.QuizSetup.getQuizWithQuestionAndOnlyCategoryUrl(numOfQuestions,questionCategory)
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
        return response
        // console.log(response)
    }

const getQuestionOnlyWithDifficulty = async (tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionDifficulty:string)=>{
        console.log("questions with difficulty");
        const url = ApiEndPoints.QuizSetup.getQuizWithQuestionAndOnlyDifficultyUrl(numOfQuestions,questionDifficulty)
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
        return response
    }

const getQuestionOnlyWithType = async (tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionsType:string)=>{
        console.log("questions with type");
        const url = ApiEndPoints.QuizSetup.getQuizWithQuestionAndOnlyTypeUrl(numOfQuestions,questionsType)
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
        return response
    }

const getQuestionWithCategoryAndDifficulty = async(tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionCategory:string,questionDifficulty:string)=>{
        console.log("with category and difficulty");
        const url = ApiEndPoints.QuizSetup.getQuizWithQuestionCategoryAndDifficultyUrl(numOfQuestions,questionCategory,questionDifficulty);
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
        return response
    }

const getQuestionWithDifficultyAndType = async(tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionDifficulty:string,questionsType:string)=>{
        console.log("with difficulty and type");
        const url = ApiEndPoints.QuizSetup.getQuizWithQuestionDifficultyAndTypeUrl(numOfQuestions,questionDifficulty,questionsType);
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
        return response
    }

const getQuestionWithCategoryAndType = async(tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionCategory:string,questionsType:string)=>{
        console.log("with category and type");
        const url = ApiEndPoints.QuizSetup.getQuizWithQuestionCategoryAndTypeUrl(numOfQuestions,questionCategory,questionsType);
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
         return response
    }

const getQuestionWithEverything = async(tokenUrl:string,
    secondaryBaseUrl:string,numOfQuestions:number,questionCategory:string,questionDifficulty:string,questionsType:string)=>{
        console.log("with everything")
        const url = ApiEndPoints.QuizSetup.getQuizWithEveryFieldUrl(numOfQuestions,questionCategory,questionDifficulty,questionsType);
        const response = await apiClientServices.get(`${secondaryBaseUrl}${url}${tokenUrl}`)
         return response

    }