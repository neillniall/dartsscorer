//var myApp = angular.module('myModule', ['ui.bootstrap']);

//angular.module('myApp.controllers', [])

function speak(textToSpeak) {
   // Create a new instance of SpeechSynthesisUtterance
   var newUtterance = new SpeechSynthesisUtterance();
   
   newUtterance.pitch = 0;

   // Set the text
   newUtterance.text = textToSpeak;

   // Add this text to the utterance queue
   window.speechSynthesis.speak(newUtterance);
}

function HelloCntl($scope) {
  $scope.name = 'Player 1';
  $scope.remaining = 501;
  $scope.lastScore = 0;
  $scope.lastThreeDarts = [];//
    //  [{score : '-'},{score : '-'},{score : '-'}];
  $scope.totalThreeDartsScores = [];
  $scope.finishes = [{"score":"100","dart1":"T20","dart2":" D20","dart3":""}, {"score":"101","dart1":"T17","dart2":" S10","dart3":" D20"}, {"score":"102","dart1":"T20","dart2":" S10","dart3":" D16"}, {"score":"103","dart1":"T17","dart2":" S12","dart3":" D20"}, {"score":"104","dart1":"T20","dart2":" T12","dart3":" D4"}, {"score":"105","dart1":"T19","dart2":" S8","dart3":" D20"}, {"score":"106","dart1":"T20","dart2":" S6","dart3":" D20"}, {"score":"107","dart1":"T20","dart2":" S15","dart3":" D16"}, {"score":"108","dart1":"T19","dart2":" S19","dart3":" D16"}, {"score":"109","dart1":"T20","dart2":" S9","dart3":" D20"}, {"score":"11","dart1":"S3","dart2":" D4","dart3":""}, {"score":"110","dart1":"T20","dart2":" S10","dart3":" D20"}, {"score":"111","dart1":"T19","dart2":" S14","dart3":" D20"}, {"score":"112","dart1":"T20","dart2":" T12","dart3":" D8"}, {"score":"113","dart1":"T19","dart2":" S16","dart3":" D20"}, {"score":"114","dart1":"T20","dart2":" S14","dart3":" D20"}, {"score":"115","dart1":"T19","dart2":" S18","dart3":" D20"}, {"score":"116","dart1":"T20","dart2":" S16","dart3":" D20"}, {"score":"117","dart1":"T20","dart2":" S17","dart3":"D20"}, {"score":"118","dart1":"T20","dart2":" S18","dart3":" D20"}, {"score":"119","dart1":"T19","dart2":" T12","dart3":" D13"}, {"score":"120","dart1":"T20","dart2":" S20","dart3":" D20"}, {"score":"121","dart1":"T20","dart2":" T11","dart3":" D14"}, {"score":"122","dart1":"T18","dart2":" T18","dart3":" D7"}, {"score":"123","dart1":"T19","dart2":" T14","dart3":" D12"}, {"score":"124","dart1":"T20","dart2":" T16","dart3":" D8"}, {"score":"125","dart1":"T18","dart2":" T13","dart3":" D16"}, {"score":"126","dart1":"T19","dart2":" T15","dart3":" D12"}, {"score":"127","dart1":"T20","dart2":" T17","dart3":" D8"}, {"score":"128","dart1":"T18","dart2":" T14","dart3":" D16"}, {"score":"129","dart1":"T19","dart2":" T16","dart3":" D12"}, {"score":"13","dart1":"S5","dart2":" D4","dart3":""}, {"score":"130","dart1":"T20","dart2":" T18","dart3":" D8"}, {"score":"131","dart1":"T20","dart2":" T13","dart3":" D16"}, {"score":"132","dart1":"T20","dart2":" T16","dart3":" D12"}, {"score":"133","dart1":"T20","dart2":" T19","dart3":" D8"}, {"score":"134","dart1":"T20","dart2":" T14","dart3":" D16"}, {"score":"135","dart1":"T20","dart2":" T17","dart3":" D12"}, {"score":"136","dart1":"T20","dart2":" T20","dart3":" D8"}, {"score":"137","dart1":"T20","dart2":" T19","dart3":" D10"}, {"score":"138","dart1":"T20","dart2":" T18","dart3":" D12"}, {"score":"139","dart1":"T19","dart2":" T14","dart3":" D20"}, {"score":"140","dart1":"T20","dart2":" T20","dart3":" D10"}, {"score":"141","dart1":"T20","dart2":" T19","dart3":" D12"}, {"score":"142","dart1":"T20","dart2":" T14","dart3":" D20"}, {"score":"143","dart1":"T19","dart2":" T18","dart3":" D16"}, {"score":"144","dart1":"T20","dart2":" T20","dart3":" D12"}, {"score":"145","dart1":"T20","dart2":" T19","dart3":" D14"}, {"score":"146","dart1":"T20","dart2":" T18","dart3":" D16"}, {"score":"147","dart1":"T20","dart2":" T17","dart3":" D18"}, {"score":"148","dart1":"T20","dart2":" T20","dart3":" D14"}, {"score":"149","dart1":"T20","dart2":" T19","dart3":" D16"}, {"score":"15","dart1":"S7","dart2":" D4","dart3":""}, {"score":"150","dart1":"T20","dart2":" T18","dart3":" D18"}, {"score":"151","dart1":"T20","dart2":" T17","dart3":" D20"}, {"score":"152","dart1":"T20","dart2":" T20","dart3":" D16"}, {"score":"153","dart1":"T20","dart2":" T19","dart3":" D18"}, {"score":"154","dart1":"T20","dart2":" T18","dart3":" D20"}, {"score":"155","dart1":"T20","dart2":" T19","dart3":" D19"}, {"score":"156","dart1":"T20","dart2":" T20","dart3":" D18"}, {"score":"157","dart1":"T20","dart2":" T19","dart3":" D20"}, {"score":"158","dart1":"T20","dart2":" T20","dart3":" D19"}, {"score":"160","dart1":"T20","dart2":" T20","dart3":" D20"}, {"score":"161","dart1":"T20","dart2":" T17","dart3":" Bullseye"}, {"score":"164","dart1":"T20","dart2":" T18","dart3":" Bullseye"}, {"score":"167","dart1":"T20","dart2":" T19","dart3":" Bullseye"}, {"score":"17","dart1":"S13","dart2":" D2","dart3":""}, {"score":"170","dart1":"T20","dart2":" T20","dart3":" Bullseye"}, {"score":"19","dart1":"S3","dart2":" D8","dart3":""}, {"score":"21","dart1":"S5 ","dart2":"D8","dart3":""}, {"score":"23","dart1":"S7","dart2":" D8","dart3":""}, {"score":"25","dart1":"S9","dart2":" D8","dart3":""}, {"score":"27","dart1":"S11","dart2":" D8","dart3":""}, {"score":"29","dart1":"S13","dart2":" D8","dart3":""}, {"score":"3","dart1":"S1","dart2":" D1","dart3":""}, {"score":"31","dart1":"S7","dart2":" D12","dart3":""}, {"score":"33","dart1":"S1","dart2":" D16","dart3":""}, {"score":"35","dart1":"S3","dart2":" D16","dart3":""}, {"score":"37","dart1":"S5","dart2":" D16","dart3":""}, {"score":"39","dart1":"S7","dart2":" D16","dart3":""}, {"score":"41","dart1":"S9","dart2":" D16","dart3":""}, {"score":"42","dart1":"S10","dart2":" D16","dart3":""}, {"score":"43","dart1":"S11","dart2":" D16","dart3":""}, {"score":"44","dart1":"S12","dart2":" D16","dart3":""}, {"score":"45","dart1":"S13","dart2":" D16","dart3":""}, {"score":"46","dart1":"S14","dart2":" D16","dart3":""}, {"score":"47","dart1":"S15","dart2":" D16","dart3":""}, {"score":"48","dart1":"S8","dart2":" D20","dart3":""}, {"score":"49","dart1":"S9","dart2":" D20","dart3":""}, {"score":"5","dart1":"S1","dart2":" D2","dart3":""}, {"score":"50","dart1":"S10","dart2":" D20","dart3":""}, {"score":"51","dart1":"S11","dart2":" D20","dart3":""}, {"score":"52","dart1":"S12","dart2":" D20","dart3":""}, {"score":"53","dart1":"S12","dart2":" D20","dart3":""}, {"score":"54","dart1":"S14","dart2":" D20","dart3":""}, {"score":"55","dart1":"S15","dart2":" D20","dart3":""}, {"score":"56","dart1":"T16","dart2":" D4","dart3":""}, {"score":"57","dart1":"S17","dart2":" D20","dart3":""}, {"score":"58","dart1":"S18","dart2":" D20","dart3":""}, {"score":"59","dart1":"S19","dart2":" D20","dart3":""}, {"score":"60","dart1":"S20","dart2":" D20","dart3":""}, {"score":"61","dart1":"T15","dart2":" D8","dart3":""}, {"score":"62","dart1":"T10","dart2":" D16","dart3":""}, {"score":"63","dart1":"T13","dart2":" D12","dart3":""}, {"score":"64","dart1":"T16","dart2":" D8","dart3":""}, {"score":"65","dart1":"T19","dart2":" D4","dart3":""}, {"score":"66","dart1":"T14","dart2":" D12","dart3":""}, {"score":"67","dart1":"T17","dart2":" D8","dart3":""}, {"score":"68","dart1":"T20","dart2":" D4","dart3":""}, {"score":"69","dart1":"T19","dart2":" D6","dart3":""}, {"score":"7","dart1":"S3","dart2":" D2","dart3":""}, {"score":"70","dart1":"T18","dart2":" D8","dart3":""}, {"score":"71","dart1":"T13","dart2":" D16","dart3":""}, {"score":"72","dart1":"T16","dart2":" D12","dart3":""}, {"score":"73","dart1":"T19","dart2":" D8","dart3":""}, {"score":"74","dart1":"T14","dart2":" D16","dart3":""}, {"score":"75","dart1":"T17","dart2":" D12","dart3":""}, {"score":"76","dart1":"T20","dart2":" D8","dart3":""}, {"score":"77","dart1":"T15","dart2":" D16","dart3":""}, {"score":"78","dart1":"T18","dart2":" D12","dart3":""}, {"score":"79","dart1":"T13","dart2":" D20","dart3":""}, {"score":"80","dart1":"T20","dart2":" D10","dart3":""}, {"score":"81","dart1":"T19","dart2":" D12","dart3":""}, {"score":"82","dart1":"T14","dart2":" D20","dart3":""}, {"score":"83","dart1":"T17","dart2":" D16","dart3":""}, {"score":"84","dart1":"T20","dart2":" D12","dart3":""}, {"score":"85","dart1":"T15","dart2":" D20","dart3":""}, {"score":"86","dart1":"T18","dart2":" D16","dart3":""}, {"score":"87","dart1":"T17","dart2":" D18","dart3":""}, {"score":"88","dart1":"T16","dart2":" D20","dart3":""}, {"score":"89","dart1":"T19","dart2":" D16","dart3":""}, {"score":"9","dart1":"S1","dart2":" D4","dart3":""}, {"score":"91","dart1":"T17","dart2":" D20","dart3":""}, {"score":"91","dart1":"T17","dart2":" D20","dart3":""}, {"score":"92","dart1":"T20","dart2":" D16","dart3":""}, {"score":"93","dart1":"T19","dart2":" D18","dart3":""}, {"score":"94","dart1":"T18","dart2":" D20","dart3":""}, {"score":"95","dart1":"T19","dart2":" D19","dart3":""}, {"score":"96","dart1":"T20","dart2":" D18","dart3":""}, {"score":"97","dart1":"T19","dart2":" D20","dart3":""}, {"score":"98","dart1":"T20","dart2":" D19","dart3":""}, {"score":"99","dart1":"T19","dart2":" S10","dart3":" D16"}];

  $scope.standardFinish = {"score": "501", "dart1": "-", "dart2": "-", "dart3": "-"};

  $scope.recognition = undefined;
  
  $scope.startVoiceInput = function()
  {
	$scope.recognition = new webkitSpeechRecognition();
	
	$scope.recognition.onresult = function(event) {
	
	  console.log("recognition.onresult");
	  
	  if (event.results.length > 0) {
		var spokenScore = event.results[0][0].transcript;
		var intScore = parseInt(spokenScore);
		
		console.log("Spoken Score : " + intScore);
		
		$scope.$apply(function() {
		   $scope.addDart(intScore);
		});
	
		
	  }
	};
	
	$scope.recognition.onerror = function(error) {
	  console.error(error);
	};
	
	$scope.recognition.start();
  }
  
  $scope.stopVoiceInput = function()
  {
		$scope.recognition.stop();
  }

  $scope.resetGame = function()
  {
  	  $scope.name = 'Player 1';
      $scope.remaining = 501;
      $scope.lastScore = 0;
      $scope.lastThreeDarts = [];
      $scope.totalThreeDartsScores = [];
  }

  $scope.calculateScore = function(lastScore) {
  	if ($scope.remaining - lastScore >= 0)
  	{
      $scope.remaining = $scope.remaining - lastScore;
      $scope.calculateFinish($scope.remaining);
      speak($scope.name + ' requires ' + $scope.remaining);

	  if ($scope.standardFinish.dart1 != '-')
	  {
		speak("Standard Finish is " + $scope.standardFinish.dart1 + ' ' + $scope.standardFinish.dart2 + "" + $scope.standardFinish.dart3);
	  }
    }
  }

    $scope.calculateFinish = function(remaining) {

    	var finishFound = $scope.finishes.filter(
    		function(el)
    		{
    			return el.score == remaining;
    		});

    	if (finishFound != null && finishFound.length == 1)
    	{
    		$scope.standardFinish = finishFound[0];
    	}
    	else
    	{
    		$scope.standardFinish = {"score": remaining, "dart1": "-", "dart2": "-", "dart3": "-"};
    	}
  }

  $scope.addDart = function(lastScore) {

      $scope.lastScore = $scope.lastScore + lastScore;

      $scope.lastThreeDarts.push({
        score: lastScore
      });

	  if ($scope.lastThreeDarts.length < 3)
      {

      }
      else
      {
        $scope.calculateScore($scope.lastScore);

        $scope.totalThreeDartsScores.push({score: $scope.lastScore, remaining: $scope.remaining, darts: $scope.lastThreeDarts});
        $scope.lastThreeDarts = [];
        $scope.lastScore = 0;
      }
  }

   $scope.scoreArray = [
        { score : '20', value : 20},
        { score : '19', value : 19},
        { score : '18', value : 18 },
        { score : '17' , value : 17},
        { score : '16' , value : 16},
        { score : '15' , value : 15},
        { score : '14' , value : 14},
        { score : '13' , value : 13},
        { score : '12' , value : 12},
        { score : '11' , value : 19},
        { score : '10' , value : 19},
        { score : '9' , value : 19},
        { score : '8' , value : 19},
        { score : '7' , value : 19},
        { score : '6' , value : 19},
        { score : '5', value : 19 }


    ];
}