from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/excel/<year>', methods=['GET'])
def get_excel_data(year):
    try:
        file_path = f"NITW 2021-22 Placement.xlsx"  # Example: data/placement_2023.xlsx
        df = pd.read_excel(file_path)
        data = df.to_dict(orient="records")
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
