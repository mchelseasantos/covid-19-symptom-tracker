class SymptomTypesController < ApplicationController

    def index 
        symptom_type = SymptomType.all
        render json: symptom_type
    end

end
