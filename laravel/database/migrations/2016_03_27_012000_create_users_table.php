<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function(Blueprint $table){

            $table->string('username')->PRIMARY();
            $table->unique('username');
            $table->string('email')->unique();
            $table->boolean('userType');
            $table->string('password');
            $table->string('CoursesDones', 5000);
            $table->string('CoursesRem', 5000);
            $table->smallInteger('CLoad');
            $table->enum('dayOff', ['None','Monday','Tuesday','Wednesday', 'Thursday', 'Friday']);
            $table->enum('pTime', ['Any', 'Mornings', 'Afternoons', 'Evenings']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
