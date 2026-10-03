const attendanceInput = document.getElementById("attendance");
const studyHoursInput = document.getElementById("studyHours");
const marksInput = document.getElementById("marks");

const result = document.getElementById("result");
const effortResult = document.getElementById("effortResult");
const distraction = document.getElementById("distraction");
const readiness = document.getElementById("readiness");
const confidence = document.getElementById("confidence");
const progressBar = document.getElementById("progressBar");

function analyze() {
    let attendance = Number(attendanceInput.value);
    let studyHours = Number(studyHoursInput.value);
    let marks = Number(marksInput.value);

    if (isNaN(attendance) || isNaN(studyHours) || isNaN(marks)) {
        result.innerText = "Please enter all values";
        result.style.color = "red";
        return;
    }

    /* Overall Score */
    let score =
        (attendance * 0.3) +
        (studyHours * 5) +
        (marks * 0.4);

    score = Math.min(Math.round(score), 100);

    result.innerText = `Overall Performance Score: ${score}%`;
    result.style.color = score >= 70 ? "green" : "red";

    progressBar.style.width = score + "%";
    progressBar.style.background = score >= 70 ? "green" : "orange";

    /* 1️⃣ Effort vs Result Analyzer */
    if (studyHours >= 4 && marks < 60) {
        effortResult.innerText =
            "High Effort + Low Result → Study method needs improvement";
    } else if (studyHours < 3 && marks >= 70) {
        effortResult.innerText =
            "Low Effort + High Result → Smart Learner";
    } else {
        effortResult.innerText =
            "Effort and result are balanced";
    }

    /* 2️⃣ Distraction Risk Analyzer */
    if (studyHours < 2 && marks < 60) {
        distraction.innerText =
            "HIGH Distraction Risk 📱 (Possible mobile/social media overuse)";
    } else if (studyHours < 3) {
        distraction.innerText =
            "MEDIUM Distraction Risk ⚠️";
    } else {
        distraction.innerText =
            "LOW Distraction Risk ✅";
    }

    /* 3️⃣ Exam Readiness Meter */
    let readinessScore =
        (attendance * 0.4) +
        (studyHours * 10) +
        (marks * 0.5);

    readinessScore = Math.min(Math.round(readinessScore), 100);

    readiness.innerText =
        `Exam Readiness: ${readinessScore}% ` +
        (readinessScore >= 70 ? "(Ready 👍)" : "(Not Fully Ready ❗)");

    /* 4️⃣ Confidence Score */
    let confidenceScore =
        (marks * 0.6) +
        (attendance * 0.2) +
        (studyHours * 5);

    confidenceScore = Math.min(Math.round(confidenceScore), 100);

    confidence.innerText =
        `Confidence Level: ${confidenceScore}% ` +
        (confidenceScore >= 70 ? "🔥" : "⚠️");
}

function resetForm() {
    attendanceInput.value = "";
    studyHoursInput.value = "";
    marksInput.value = "";
    result.innerText = "";
    effortResult.innerText = "";
    distraction.innerText = "";
    readiness.innerText = "";
    confidence.innerText = "";
    progressBar.style.width = "0%";
}




